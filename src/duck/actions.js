import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
  requestInitialData: [""],
  receiveInitialData: ["data"],
  failInitialData: ["error"],

  startProjectUpdate: [""],
  finishProjectUpdate: ["data"],
});

export { Creators, Types };
