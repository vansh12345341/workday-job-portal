import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './JobCard.css';

export default function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let minSalary = job.minJdSalary;
  let maxSalary = job.maxJdSalary;

  if (minSalary == null && maxSalary != null) {
    minSalary = maxSalary - 5;
  } else if (maxSalary == null && minSalary != null) {
    maxSalary = minSalary + 5;
  } else if (minSalary == null && maxSalary == null) {
    minSalary = 15;
    maxSalary = 20;
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="header">
          <div className="logo">
            <img src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713846224941_fab2j.jpg" alt="logo" />
          </div>
          <div className="job-info">
            <span className="company-name">Endor</span>
            <span className="job-title">{job.jobRole}</span>
            <span className="job-location">{job.location}</span>
          </div>
        </div>
        <p className="salary">Estimated Salary: ₹{minSalary} - {maxSalary} LPA</p>
        <h3>About Company</h3>
        <div className="about-company">
           About us:
          <p>{job.jobDetailsFromCompany}</p>
          {!expanded && <div className="gradient" ></div>}
        </div>
        <div className="actions">
          <button onClick={handleExpandClick} className="view-job">View Job</button>
        </div>
        <div class="info-container"> 
        <div class="title">Minimum Experience</div>
        <div class="value">{job.minExp ? job.minExp : 2} year</div>
        </div>
        <div>
        <button className="easy-apply">⚡ Easy Apply</button>
        </div>
      </div>
    </div>
  );
}
