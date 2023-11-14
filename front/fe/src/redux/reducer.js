import { Getsingle } from "./action";
import { get_Request, get_single, setuser } from "./actiontypes";


let initstate={
isauth:false,
user:{},
quizs:[],
single:[{
    leaderboard:[]
}
]


};

export function reducer(state=initstate,{type,payload})
{
    switch(type)
    {
        case setuser :{
            return {
                ...state,isauth:true,user:payload
            }
        }

        case get_Request:{
            return {
                ...state,quizs:payload
            }
        }

        case get_single :{
            return {
                ...state,single:payload
            }
        }

        default:
            return state
    } 
};