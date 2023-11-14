import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Diplaydata, deletequizz } from "../redux/action";
import { Box,Input,Button,Card,CardBody,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Select} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";


function Dashboard(){
  
const dispatch=useDispatch();
const navigate=useNavigate();
const quizes=useSelector((state)=>{
    console.log(state.quizs,123);
    return state.quizs;
}) || [];

const user=useSelector((state)=>{
    console.log(state.user,"user");
    return state.user;
});


    useEffect(()=>{
        dispatch(Diplaydata(user));
    },[]);

function deletereq(id)
{
    dispatch(deletequizz(id));
}

function toleader(id){
    navigate(`leader/${id}`);
}


    return(
        <>
        <h1>This is dashboard</h1>
        <Button bg={"red"} color={"white"} onClick={()=>{navigate("/dash/create")}}>Create Doubt</Button>
        <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
        {
            quizes?.map((item,index)=>{
                return (
                    <Card maxW='sm'>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{item.quiz.title}</Heading>
      <Text>
     {item.quiz.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       Created by : {item.quiz.creator}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       questions : {item.leaderboard.length}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      {
       user.email==item.quiz.creator?<Button variant='solid' colorScheme='yellow'>
       edit
     </Button>:<Button variant='solid' colorScheme='blue'>
       Take quiz
     </Button>
      }
      {
       user.email==item.quiz.creator?<Button variant='solid' colorScheme='pink' onClick={()=>{deletereq(item._id)}}>
       Delete
     </Button>:<Button variant='ghost' colorScheme='blue' onClick={()=>{toleader(item._id)}}>;
       Leaderboard
      </Button>
      }

      
    </ButtonGroup>
  </CardFooter>
</Card>
                )
            })
        }
        </Box>
        {/* <Box width={"40%"} margin={"auto"}>
        <Input placeholder='Enter your Doubt'/>
        <Select placeholder='Select grade' name='grade'>
  <option value='1'> 1</option>
  <option value='2'> 2</option>
  <option value='3'> 3</option>
  <option value='3'> 4</option>
  <option value='3'> 5</option>
  <option value='3'> 6</option>
</Select>
<Input placeholder='Enter your subject'/>
        </Box> */}
        </>
    )
};

export default Dashboard;