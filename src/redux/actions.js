// actions.js

export const SET_ROLE_FILTER = 'SET_ROLE_FILTER';
export const SET_EXPERIENCE_FILTER = 'SET_EXPERIENCE_FILTER';

export const setRoleFilter = (role) => {
  console.log('Dispatching role filter:', role);  
  return {
    type: SET_ROLE_FILTER,
    payload: role,
  };
};

export const setExperienceFilter = (experience) => {
  console.log('Dispatching experience filter:', experience);  
  return {
    type: SET_EXPERIENCE_FILTER,
    payload: experience,
  };
};
