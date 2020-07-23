import {GET_SCHOOLS,ADD_SCHOOL} from "../constants/schoolConstants";

const initialState ={
    schools:[]
};
export default function(state = initialState,action){
    switch (action.type) {
        case GET_SCHOOLS:
            console.log("schools reducer action",action.payload);
            
            return {
                ...state,
                schools:[...action.payload]
            }
        case ADD_SCHOOL:
            console.log("hit Add School");
            return{
                ...state,
                schools:[...action.payload]
            }

            
            
    
        default:
            return state
    };

};