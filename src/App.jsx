import {Route, Routes} from "react-router-dom";
import Main from "./views/Main/Main";
import SignIn from "./views/SignIn/SignIn";
import AddConfigurationModal from "./components/AddConfigurationModal/AddConfigurationModal";
import {AuthWrapper} from "./contexts/AuthContext/AuthContext";

export default function App() {
    return <AuthWrapper>
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route path="addConfiguration" element={<AddConfigurationModal/>}></Route>
            </Route>
            <Route exact={true} element={<SignIn/>}/>
        </Routes>
    </AuthWrapper>
}