import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/js/all';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";

//Import Loader
import EyeLoader from './components/EyeLoader/EyeLoader';
import Axios from "axios";

// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";

//get the csrf token from backend
Axios.defaults.withCredentials = true;
Axios.get( "http://localhost:8000/sanctum/csrf-cookie");

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <Suspense fallback={<EyeLoader />}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Suspense>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
