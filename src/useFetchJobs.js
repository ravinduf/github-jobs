import { useReducer } from 'react';


const  ACTIONS = {
    MAKE_REQUEST: 'make_request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action) {
    switch(ACTIONS.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] };
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: []}
        default:
            return state

    }

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
