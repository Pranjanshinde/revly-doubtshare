import { Box,Input,Button,Select} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Register } from '../redux/action';

const init={
    email:"",
    password:"",
    name:"",
    grade:[],
    type:"",
    subject:[]

}

function Signup(){
    const [cred,setCred]=useState(init);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    function handlecred(e)
    {
        if(e.target.name=="grade" || e.target.name=="subject")
        {
            setCred({...cred,[e.target.name]:e.target.value.trim().split(" ")});
        }else{
            setCred({...cred,[e.target.name]:e.target.value});
        }
        
    }

    function submitcred()
    {
        console.log(cred);
        dispatch(Register(cred,navigate));
    }

    return(
        <>
        <h1>This is Signup</h1>
        <Box width={"40%"} margin={"auto"}>
        <Input placeholder='Enter name' marginBottom={"20px"} name="name" onChange={handlecred}/>
        <Select placeholder='Select grade' name='grade' onChange={handlecred}>
  <option value='1'> 1</option>
  <option value='2'> 2</option>
  <option value='3'> 3</option>
  <option value='3'> 4</option>
  <option value='3'> 5</option>
  <option value='3'> 6</option>
</Select>
<Select placeholder='User Type' name='type' onChange={handlecred}>
  <option value='student'>student</option>
  <option value='tutor'>tutor</option>
 
</Select>
<Input placeholder='Enter subjects' marginBottom={"20px"} name="subject" onChange={handlecred}/>
        <Input placeholder='Enter Email' marginBottom={"20px"} name="email" onChange={handlecred}/>
        <Input placeholder='Enter Password' marginBottom={"20px"} name="password" onChange={handlecred}/>
        <Button colorScheme='blue' onClick={submitcred}>Register</Button>
        </Box>
        </>
    )
};

export default Signup;