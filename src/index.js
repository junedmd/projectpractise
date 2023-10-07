import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./views/Contact/Contact";
import Shop from "./components/Shop/Shop";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>

    <Shop/>

 </>
)
  
  
  
