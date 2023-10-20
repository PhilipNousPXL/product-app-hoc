import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";

//create a root element
const root = createRoot(document.getElementById('root'));
//mount the <App/> component on this root element
root.render(
        <App />
);
