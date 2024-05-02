// reducers.js

import { SET_ROLE_FILTER, SET_EXPERIENCE_FILTER } from './actions';

const initialState = {
  roleFilter: '',
  experienceFilter: '',
};

const jobFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE_FILTER:
      return {
        ...state,
        roleFilter: action.payload,
      };
    case SET_EXPERIENCE_FILTER:
      return {
        ...state,
        experienceFilter: action.payload,
      };
    default:
      return state;
  }
};

export default jobFiltersReducer;
