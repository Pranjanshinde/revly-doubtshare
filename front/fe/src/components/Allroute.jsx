import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import Quize from "../pages/Quize";
import Leaderboard from "../pages/Leaderboard";
import Create from "../pages/Create";


function Allroutes(){
    

    return(
        <>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/dash/create" element={<Create/>} />
        <Route path="/quize/:id" element={<Quize/>} />
        <Route path="/dash/leader/:id" element={<Leaderboard/>} />
        </Routes>
        </>
    )
};

export default Allroutes;