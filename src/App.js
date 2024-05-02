import React from 'react';
import JobListings from './JobDisplay';
import JobFilters from './compoents/JobFilters';

const App = () => {
  return (
    <div>
      <JobFilters />
     <JobListings />
    </div>
  )
}

export default App
