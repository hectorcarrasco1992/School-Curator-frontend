import Axios from "../../lib/Axios/Axios"
import {GET_SCHOOLS} from "../constants/schoolConstants"

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
}