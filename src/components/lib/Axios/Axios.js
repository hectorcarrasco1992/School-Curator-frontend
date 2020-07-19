import axios from 'axios';

const Axios = axios.create({
    baseURL:process.env.NODE_ENV === 'development'
    ?"http://localhost:3001"
    :"" ,
    timeout:5000,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    }
})

export default Axios;
