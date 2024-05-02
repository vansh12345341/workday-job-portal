import React from 'react';
import { useDispatch } from 'react-redux';
import { setRoleFilter, setExperienceFilter } from '../redux/actions';


export const RoleFilter = ({ onFilterChange }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setRoleFilter( e.target.value));
  };

  return (
    <div className="filter">
      <label htmlFor="role">Roles</label>
      <select id="role" onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
        <option value="fullstack">Python</option>
        
      </select>
    </div>
  );
};
