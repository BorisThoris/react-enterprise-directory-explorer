import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../../sharedScreenStyles/index.css";

import CompanyButton from "./components/CompanyButton";
import DetailsList from "../CompanyDetailsList/CompanyDetailsList";

const CompaniesList = ({ GetInitialData, UpdateProject, state }) => {
  const [currentlyOpennedCompany, setCurrentlyOpennedCompany] = useState(false);
  const [currentCompanyProjects, setCurrentCompanyProjects] = useState([]);
  const [currentCompanyEmployees, setCurrentCompanyEmployees] = useState([]);

  const homeState = state.home;
  const data = homeState.data;
  const companies = data ? data.companies || [] : [];
  const projects = data ? data.projects || [] : [];
  const employees = data ? data.employees || [] : [];
  const companyAddresses = data ? data["company-addresses"] || [] : [];

  useEffect(() => {
    if (!data && !homeState.loading && !homeState.error) {
      GetInitialData();
    }
  }, [data, homeState.loading, homeState.error, GetInitialData]);

  useEffect(() => {
    if (currentlyOpennedCompany) {
      const currentProjects = projects.filter(
        (project) => project.companyId === currentlyOpennedCompany.id
      );
      const currentEmployees = employees.filter(
        (employee) => employee.companyId === currentlyOpennedCompany.id
      );

      setCurrentCompanyEmployees(currentEmployees);
      setCurrentCompanyProjects(currentProjects);
    }
  }, [currentlyOpennedCompany, projects, employees]);

  if (homeState.error) {
    return (
      <div className="treeWrapper">
        <div className="treeContainer">
          <div className="treeTitle">Directory unavailable</div>
          <div className="addressDepartmentTitle">{homeState.error}</div>
        </div>
      </div>
    );
  }

  if (!data || homeState.loading) {
    return (
      <div className="treeWrapper">
        <div className="treeContainer">
          <div className="treeTitle">Loading directory...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="treeWrapper">
      <div className="treeContainer">
        <div className="treeTitle">Companies</div>
        {companies.map((company) => {
          return (
            <CompanyButton
              key={company.id}
              company={company}
              setCurrentlyOpenned={setCurrentlyOpennedCompany}
            ></CompanyButton>
          );
        })}
      </div>

      {currentlyOpennedCompany && (
        <DetailsList
          address={companyAddresses.find(
            (x) => currentlyOpennedCompany.id === x.companyId
          )}
          setCurrentlyOpennedCompany={setCurrentlyOpennedCompany}
          company={currentlyOpennedCompany}
          projects={currentCompanyProjects}
          employees={currentCompanyEmployees}
          state={state}
          UpdateProject={UpdateProject}
        ></DetailsList>
      )}
    </div>
  );
};

CompaniesList.propTypes = {
  state: PropTypes.object.isRequired,
  GetInitialData: PropTypes.func.isRequired,
  UpdateProject: PropTypes.func.isRequired,
};

export default CompaniesList;
