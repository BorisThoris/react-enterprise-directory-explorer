const INITIAL_STATE = {
  data: false,
  loading: false,
  error: false,
};

const MainReducer = (state = INITIAL_STATE, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "REQUEST_INITIAL_DATA": {
      return {
        ...newState,
        loading: true,
        error: false,
      };
    }

    case "RECEIVE_INITIAL_DATA": {
      const { data } = action;

      return {
        ...newState,
        data,
        loading: false,
        error: false,
      };
    }

    case "FAIL_INITIAL_DATA": {
      const { error } = action;

      return {
        ...newState,
        loading: false,
        error,
      };
    }

    default:
      return newState;
  }
};

export default MainReducer;
