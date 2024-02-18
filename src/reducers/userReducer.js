import { START_LOADING, INFO_SUCCESS, INFO_FAIL } from '../constants/auth'

const initialState = {
  employeeInfo: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case INFO_SUCCESS:
      return { ...state, loading: false, employeeInfo: action.payload };
    case INFO_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
