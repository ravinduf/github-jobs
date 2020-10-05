import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';

import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {

  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error, hasNextPage } = useFetchJobs( params, page );
  
  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return{ ...prevParams, [param]: value };

    })
  }
  console.log(params);
  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <SearchForm params={params} onParamsChange={handleParamChange}/>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      {loading && <h1>Loading</h1>}
      {(jobs.length === 0 && !loading) && <h1>Sorry no jobs </h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => (
        < Job key={job.id} job={job} />
      ))}
    </Container>  
  );
}

export default App;
