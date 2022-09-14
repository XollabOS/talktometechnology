import {Route, Routes} from "react-router-dom";
import Main from "./views/Main/Main";
import SignIn from "./views/SignIn/SignIn";
import AddConfigurationModal from "./components/AddConfigurationModal/AddConfigurationModal";
import {AuthWrapper} from "./contexts/AuthContext";
import {ButtonConfigurationWrapper} from "./contexts/ButtonConfigurationContext";

export default function App() {
    return <AuthWrapper>
        <ButtonConfigurationWrapper>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="addConfiguration" element={<AddConfigurationModal/>}></Route>
                </Route>
                <Route exact={true} element={<SignIn/>} path="/login"/>
            </Routes>
        </ButtonConfigurationWrapper>
    </AuthWrapper>
}