import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Summoner from "../pages/Summoner";
import Error from "../pages/Error";


export default [
    <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/summoner"} element={<Summoner />} />
        <Route path={"*"} element={<Error />} />
    </Routes>


];
