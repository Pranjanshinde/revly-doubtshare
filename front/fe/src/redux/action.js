import axios from 'axios';
import { get_Request, get_single, setuser } from './actiontypes';

function aftrlogin(payload)
{
    return {
        type:setuser,
        payload:payload
    }
}

function showquizzes(payload)
{
    return{
        type:get_Request,
        payload:payload
    }
}

function afterleader(payload)
{
    return {
        type:get_single,
        payload:payload
    }
}


export const Register =(data,navigate)=>(dispatch)=>{
    axios.post('http://localhost:8080/users/register', data)
      .then(function (response) {
        console.log(response);
        navigate("/signin");
        alert("User registered");
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const Loginrequest =(data,navigate)=>(dispatch)=>{
    axios.post('http://localhost:8080/users/login', data)
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token",response.data.token);
        dispatch(aftrlogin(response.data.user));

        navigate("/dash");
        alert("Login succeessfull");
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const Diplaydata=(user)=>(dispatch)=>{
    axios({
        method: 'get',
        url: 'http://localhost:8080/doubts',
        headers:{
            Authorization:`${localStorage.getItem("token")}`
        },
        data: {
         name:user.name
        }
      }).then((response)=>{
        console.log(response);
        dispatch(showquizzes(response.data));

      }).catch((err)=>console.log(err));
}

export const deletequizz=(id)=>(dispatch)=>{
    axios({
        method: 'delete',
        url: `https://mock14server-fa5t.onrender.com/quize/${id}`,
        headers:{
            Authorization:`${localStorage.getItem("token")}`
        }
      }).then((response)=>{
        console.log(response);
        dispatch(Diplaydata());

      }).catch((err)=>console.log(err));
}

export const Getsingle = (id) => (dispatch)=>{
    axios({
        method: 'get',
        url: `https://mock14server-fa5t.onrender.com/quize/${id}`,
        headers:{
            Authorization:`${localStorage.getItem("token")}`
        }
      }).then((response)=>{
        console.log(response.data);
        dispatch(afterleader(response.data));

      }).catch((err)=>console.log(err));
}

export const Postquizz=(data)=>(dispatch)=>{
    axios({
        method: 'post',
        url: `https://mock14server-fa5t.onrender.com/quize`,
        headers:{
            Authorization:`${localStorage.getItem("token")}`
        },
        data:data
      }).then((response)=>{
        console.log(response);
        dispatch(Diplaydata());

      }).catch((err)=>console.log(err));
}