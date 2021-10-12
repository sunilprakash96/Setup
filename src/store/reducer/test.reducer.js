import { TEST_ACTION, GET_USER } from "../../utils/types.utils";

const initialState = {
  user: []
};

const TestReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, ...action.payload };
    case GET_USER:
      return { ...state, user: action.payload }
    default:
      return state;
  }
}

export default TestReducer;