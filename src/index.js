import React, {createContext} from 'react';
import App from './App';
import 'antd/dist/reset.css';
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {createRoot} from "react-dom/client";
// import firebase from "firebase/compat";
// import 'firebase/firestore'


// firebase.initializeApp({
//
//         apiKey: "AIzaSyAXC8nkmo48jFfdf94z4v_hiMfQgErYC9c",
//
//         authDomain: "reactlessons-f5f62.firebaseapp.com",
//
//         projectId: "reactlessons-f5f62",
//
//         storageBucket: "reactlessons-f5f62.appspot.com",
//
//         messagingSenderId: "250251370656",
//
//         appId: "1:250251370656:web:d80010415718a6cd8f69c5"
//
//     }
// )
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>
);


