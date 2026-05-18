// operations.js
import { Creators } from "./actions";

const requestInitialDataAction = Creators.requestInitialData;
const receiveInitialDataAction = Creators.receiveInitialData;
const failInitialDataAction = Creators.failInitialData;

const startProjectUpdate = Creators.startProjectUpdate;

const getResponseData = (responseData) => responseData.db || responseData;

const fetchInitialData = () => {
  return (dispatch) => {
    dispatch(requestInitialDataAction());

    /*eslint-disable */
    //suppress all warnings between comments
    return fetch(`http://localhost:5000/db`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load directory data.");
        }

        return response.json();
      })
      .then((json) => {
        const data = getResponseData(json);

        dispatch(receiveInitialDataAction(data));
      })
      .catch((error) => {
        dispatch(failInitialDataAction(error.message));
      });
    /*eslint-enable */
  };
};

const updateProject = (passedState) => {
  return (dispatch) => {
    dispatch(startProjectUpdate());

    /*eslint-disable */
    //suppress all warnings between comments
    return fetch(`http://localhost:5000/db`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(passedState),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to update directory data.");
        }

        return response.json();
      })
      .then((json) => {
        const responseData = getResponseData(json);

        dispatch(receiveInitialDataAction(responseData));
      })
      .catch((error) => {
        dispatch(failInitialDataAction(error.message));
      });
    /*eslint-enable */
  };
};

export default {
  fetchInitialData,
  updateProject,
};
