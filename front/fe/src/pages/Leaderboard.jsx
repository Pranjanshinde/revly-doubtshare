import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Getsingle } from "../redux/action";
import { Box,Input,Button,Text} from '@chakra-ui/react';


function Leaderboard(){
const {id}=useParams();
console.log(id);
const dispatch=useDispatch();

const people =useSelector((state)=>{
    console.log(state.single[0].leaderboard,"sd");
    return state.single[0].leaderboard;
});


useEffect(()=>{
const data=dispatch(Getsingle(id));
},[])
    return(
        <>
        <h1>This is Leaderboard</h1>
        <Box>
        {
            people.map((item,index)=>{
                return(
                    <Text > {item.email} : {item.score}</Text>

                )
            })
        }
        </Box>
        </>
    )
};

export default Leaderboard;