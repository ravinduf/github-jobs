import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';

import Job from './Job';
import JobsPagination from './JobsPagination';

function App() {

  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetchJobs();
  
  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <JobsPagination page={page} setPage={setPage} hasNextPage={true}/>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => (
        < Job key={job.id} job={job} />
      ))}
    </Container>  
  );
}

export default App;
