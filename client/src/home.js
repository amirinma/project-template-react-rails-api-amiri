import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddSupp from "./features/suppliers/addSupForm";
import HomePageDet from "./homePageDet";
import EnterBill from "./features/suppliers/enterBill";

function Home(){
    return(
        <div className="home-page-elements-parent">
            <HomePageDet />
        </div>

        
    )
}

export default Home