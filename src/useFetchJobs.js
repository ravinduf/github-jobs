import { useReducer } from 'react';


const  ACTIONS = {
    MAKE_REQUEST: 'make_request',
    GER_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action) {

}

const useFetchJobs = (params, page) => { 
    
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true, })
    return {
        jobs: [],
        loading: true,
        error: false
    }
}

export default useFetchJobs;
