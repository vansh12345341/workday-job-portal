import React from 'react';
import './JobFilter.css';
import { RoleFilter } from './RoleFilter';
import { ExperienceFilter } from './ExperienceFilter';


const JobFilters = ({ onFilterChange }) => {
  return (
    <form className="job-filters" onSubmit={e => e.preventDefault()}>
      <RoleFilter onFilterChange={onFilterChange} />
      <ExperienceFilter onFilterChange={onFilterChange} />
    </form>
  );
};

export default JobFilters;
