import React from 'react'
import ReactDOM from 'react-dom/client'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

