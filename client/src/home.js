import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddSupp from "./features/suppliers/addSupForm";
import HomePageDet from "./homePageDet";
import EnterBill from "./features/suppliers/enterBill";

function Home(){
    return(
        <div>
            <HomePageDet />
            {/* < HomePageDet /> */}
            {/* <Router>
                <Routes>
                    <Route path="add-sup" element={<AddSupp />}/>
                </Routes>
            </Router> */}
        </div>

        
    )
}

export default Home