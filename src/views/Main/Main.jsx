import SpeakGrid from "../../components/SpeakGrid/SpeakGrid";
import {AuthWrapper} from "../../components/AuthContext/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

function Main() {
    return <AuthWrapper>
        <Navbar></Navbar>
        <SpeakGrid></SpeakGrid>
    </AuthWrapper>
}

export default Main;