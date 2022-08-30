import {Route, Routes} from "react-router-dom";
import Main from "./views/Main/Main";
import SignIn from "./views/SignIn/SignIn";

export default function App() {
    return <Routes>
        <Route path="/" exact={true} element={<Main/>}/>
        <Route path="/login" exact={true} element={<SignIn/>}/>
    </Routes>
}