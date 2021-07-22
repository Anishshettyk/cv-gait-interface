import * as types from './userTypes';

const initialState = {
  userDetails: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        userDetails: { ...action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
