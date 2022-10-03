export function fetchSupplier(){
    return function(dispatch){
        console.log("dispatch", dispatch)
        dispatch({type: "sup/supLoading"});
        fetch("/suppliers")
        .then((response)=>response.json())
        .then((data)=>{dispatch({type: "sup/supLoaded", payload: data})})
    }
}

const initialState = {
    suppliers: [], 
    status: "idle"
}
export default function supplierReducer(state = initialState, action){
    
    switch(action.type){
        case "sup/supLoading":
            return {
                ...state, 
                status: "loading",
            }
        case "sup/supLoaded":
            return {
                ...state, 
                suppliers: action.payload, 
                status: "idle",
            };
        default:
            return state;
    }
}

// .then((data)=>{dispatch({type: 'sup/supLoaded', payload: data.suppliers})})