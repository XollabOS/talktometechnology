import SpeakGrid from "../../components/SpeakGrid/SpeakGrid";
import Navbar from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

function Main() {
    return <div>
        <Navbar></Navbar>
        <SpeakGrid></SpeakGrid>
        <Outlet></Outlet>
    </div>
}

export default Main;