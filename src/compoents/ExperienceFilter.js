import React from 'react';
import { useDispatch } from 'react-redux';
import { setRoleFilter, setExperienceFilter } from '../redux/actions';



export const ExperienceFilter = ({ onFilterChange }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("experience", e.target.value)
    dispatch(setExperienceFilter(e.target.value));    
  };

  return (
    <div className="filter">
      <label htmlFor="experience">Min Experience</label>
      <select id="experience" onChange={handleChange}>
        <option value="">Select Experience</option>
        <option value="1">1 year</option>
        <option value="2">2 year</option>
        <option value="3">3 year</option>
        <option value="4">4 year</option>
        <option value="5">5 year</option>
        <option value="6">6 year</option>
        <option value="7">7 year</option>
        <option value="8">8 year</option>
        <option value="9">9 year</option>
        <option value="10">10 year</option>
        
      </select>
    </div>
  );
};
