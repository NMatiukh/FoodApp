import React from 'react';
import App from './App';
import 'antd/dist/reset.css';
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {createRoot} from "react-dom/client";

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


