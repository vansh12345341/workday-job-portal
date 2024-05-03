import React, { useState } from 'react';
import JobModal from './compoents/modal/JobModal';
import './JobCard.css';

export default function JobCard({ job }) { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
    <div class="card">
      <div class="card-content">
        <div class="header">
          <div class="logo">
            <img src={job.logoUrl} alt="logo" />
          </div>
          <div class="job-info">
            <div class="company-name">{job.companyName}</div>
            <div class="job-title">{job.jobRole}</div>
            <p class="job-location">{job.location}</p>
          </div>
        </div>
        <p class="salary">Estimated Salary: ₹{minSalary} - {maxSalary} LPA</p>
        <h3>About Company</h3>
        <div class="about-company">
           About us:
          <p>{job.jobDetailsFromCompany}</p>
          <div class="gradient" ></div>
        </div>
        <div class="actions">
          <button onClick={toggleModal} className="view-job">View Job</button>
        </div>
        <div class="info-container"> 
        <div class="title">Minimum Experience</div>
        <div class="value">{job.minExp ? job.minExp : 2} year</div>
        </div>
        <div>
        <button class="easy-apply">⚡ Easy Apply</button>
        </div>
      </div>
      <JobModal job={job} isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
