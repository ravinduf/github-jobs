import { useReducer } from 'react';

const useFetchJobs = (params, page) => {
    
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true, })
    return {
        jobs: [],
        loading: true,
        error: false
    }
}

export default useFetchJobs;
