import React from 'react';
import './JobFilter.css';
import { RoleFilter } from './RoleFilter';
import { ExperienceFilter } from './ExperienceFilter';
import { CompanyNameFilter } from './CompanyFilter';
import { MinimumBasePayFilter } from './MinimumBasePayFilter';


const JobFilters = () => {
  return (
    <form className="job-filters" onSubmit={e => e.preventDefault()}>
      <RoleFilter />
      <ExperienceFilter  />
      <MinimumBasePayFilter/>
      <CompanyNameFilter />
    </form>
  );
};

export default JobFilters;
