import React, { useEffect, useState, useRef, useCallback } from 'react';
import JobCard from './JobCard';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const observer = useRef(null);
  const lastElementRef = useRef(); 

  const roleFilter = useSelector(state => state.roleFilter);
  const experienceFilter = useSelector(state => state.experienceFilter);
  const companyNameFilter = useSelector(state => state.companyNameFilter);
  const minimumBasePayFilter = useSelector(state => state.minimumBasePayFilter);

  
 useEffect(() => {
    const filteredJobs = allJobs.filter(job => {
      const roleMatches = roleFilter.length > 0 ? roleFilter.includes(job.jobRole) : true;
      const experienceMatches =  experienceFilter ? job.minExp >= parseInt(experienceFilter, 10) : true;
      const companyMatches = companyNameFilter ? job.companyName.toLowerCase().includes(companyNameFilter.toLowerCase()) : true;
      const basePayMatches = minimumBasePayFilter ? job.minJdSalary >= parseInt(minimumBasePayFilter, 10) : true;
      return roleMatches && experienceMatches && companyMatches && basePayMatches;
    });
    setJobs(filteredJobs);

  }, [roleFilter, experienceFilter, minimumBasePayFilter, companyNameFilter, allJobs]);

  useEffect(() => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ "limit": 100, "offset": offset });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then(response => response.json())
      .then(data => {
        const newData = data.jdList.map(job => ({
          ...job,
          minExp: job.minExp ? parseInt(job.minExp, 10) : 2
        }));
        setAllJobs(prev => [...prev, ...newData]);
        setJobs(prev => [...prev, ...newData]);
        setHasMore(data.jdList.length === 100);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  }, [offset]);

  useEffect(() => {
    if (jobs.length ) {
      observer.current.unobserve(lastElementRef.current);
      if (lastElementRef.current) {
        observer.current.observe(lastElementRef.current);
      }
    }
  }, [jobs]);

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        setOffset(prev => prev + 100);
      }
    }, { threshold: 0.1 });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, hasMore, lastElementRef]);


  return (
    <Grid container spacing={2}>
      {jobs.map((job, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} ref={index === jobs.length - 1 ? lastElementRef : null}>
          <JobCard job={job} />
        </Grid>
      ))}
      {loading && (
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          Loading more jobs...
        </Grid>
      )}
    </Grid>
  );
};

export default JobListings;
