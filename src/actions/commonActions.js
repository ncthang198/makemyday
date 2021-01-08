import { LOADING, } from "./actions-type"

export const loading = (data) => {        
    return ({ type: LOADING, data })
};
