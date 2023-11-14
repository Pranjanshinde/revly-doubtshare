import { Box,Input,Button,Card,CardBody,Stack,Heading,Text,Divider,CardFooter,ButtonGroup} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Postquizz } from '../redux/action';





function Create(){
const [title,setTitle]=useState("");
const [desc,setDesc]=useState("");
const [que,setQue]=useState("");
const [question,setQuestion]=useState([]);
const [op1,setOp1]=useState("");
const [op2,setOp2]=useState("");
const [op3,setOp3]=useState("");
const [op4,setOp4]=useState("");
const [ans,setAns]=useState("");
const user=useSelector((state)=>{
    console.log(state.user,"user");
    return state.user;
});

const dispatch=useDispatch();


function submitquestions(){
    const obj= {
        title:que,
        answerOptions:[
            op1,  op2,op3,op4
        ],
        correctOptions:ans.trim().split(" ").map(Number)
    }

    console.log(obj);
    setQuestion({...question,obj});
}

function createplease()
{
    let obj={quiz:{
        title:title,
        creator:user.email,
        desciption:desc,
        questions:question
    },
    leaderboard:[]

}
console.log(obj);
dispatch(Postquizz(obj));

}



    return (
        <>
        This is create page
        <Box width={"40%"} margin={"auto"}>
        <Input placeholder='Enter title of quize' marginBottom={"20px"}   onChange={(e)=>{setTitle(e.target.value)}}/>
        <Input placeholder='Enter description' marginBottom={"20px"}  onChange={(e)=>{setDesc(e.target.value)}}/>
        <Input placeholder='Enter question' marginBottom={"20px"} name="password" onChange={(e)=>{setQue(e.target.value)}}/>
        <Input placeholder='Enter option 1' marginBottom={"20px"} name="password" onChange={(e)=>{setOp1(e.target.value)}}/>
        <Input placeholder='Enter option 2' marginBottom={"20px"} name="password" onChange={(e)=>{setOp2(e.target.value)}}/>
        <Input placeholder='Enter option 3' marginBottom={"20px"} name="password" onChange={(e)=>{setOp3(e.target.value)}}/>
        <Input placeholder='Enter option 4' marginBottom={"20px"} name="password" onChange={(e)=>{setOp4(e.target.value)}}/>
        <Input placeholder='Enter correct options' marginBottom={"20px"} name="password" onChange={(e)=>{setAns(e.target.value)}}/>
        <Button colorScheme='blue' onClick={submitquestions}>submit question</Button>
        <Button colorScheme='cyan' onClick={createplease}>submit quiz</Button>
        </Box>
        </>
    )
}

export default Create;