import Axios from "../../lib/Axios/Axios"
import {GET_SCHOOLS,ADD_SCHOOL} from "../constants/schoolConstants"


export const schoolAPI = ()=>async(dispatch)=>{
    try {
        let success = await Axios.get("/api/school/get-schools")
        console.log("success",success.data)
        dispatch({
            type:GET_SCHOOLS,
            payload:success.data
        })
        
    } catch (error) {
        console.log(error)
    }
};

export const addSchool = (userInput) => async (dispatch)=>{
    let success = await Axios.post("/api/school/add-school",userInput);
    console.log("add school success",success.data);
    dispatch({
        type: ADD_SCHOOL,
        payload:success.data
    })
    
}