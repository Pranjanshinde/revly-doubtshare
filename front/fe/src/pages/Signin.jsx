import { Box,Input,Button} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loginrequest, Register } from '../redux/action';

const init={
    email:"",
    password:""
}


function Signin(){
    const [cred,setCred]=useState(init);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    function handlecred(e)
    {
        setCred({...cred,[e.target.name]:e.target.value})
    }

    function submitcred()
    {
        console.log(cred);
        dispatch(Loginrequest(cred,navigate));
    }
    return(
        <>
        <h1>This is Signin</h1>
        <Box width={"40%"} margin={"auto"}>
        <Input placeholder='Enter Email' marginBottom={"20px"} name="email" onChange={handlecred}/>
        <Input placeholder='Enter Password' marginBottom={"20px"} name="password" onChange={handlecred}/>
        <Button colorScheme='blue' onClick={submitcred}>Login</Button>
        </Box>
        </>
    )
};

export default Signin;