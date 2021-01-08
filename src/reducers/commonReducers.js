import { LOADING } from "../actions/actions-type"

const initState = {
    loading: false
}

export default commonReducers = (state = initState, action) => {
    const { type, data } = action    
    switch (type) {
        
        case LOADING: {            
            return Object.assign({}, state, {
                loading: data
            });
        }
        default: {
            return state
        }
    }
}