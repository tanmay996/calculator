import React from "react";
import './components/style/style.scss'
import  ReactDOM  from "react-dom/client";
import Calculator from "./components/Calculator";
const root = ReactDOM.createRoot(document.getElementById("calculator"))
root.render(
   <Calculator />
)