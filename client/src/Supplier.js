
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Supplierdetail from "./Supplierdetail";

function Supplier({supplierFo}){

    const details = useSelector(state => state)
    console.log("redux", details)

    const [suppDetail, setSuppDetail]=useState([])
    function getDetails(e){
        setSuppDetail(e)

    }
    const supplierList = supplierFo.map((supp)=>{

        
        return (
            <div>
                <Link onClick={((e)=>{getDetails(e.target.textContent)})} className='link-link'>{supp.name}</Link>
            </div>
        )
    })
   const test = document.getElementsByClassName("link-link")
   console.log("test",suppDetail)

    function addSupp(){
        console.log("I was Cliked")
    }
    return(
        <div className="sup-div">
            <div className="member-list">
                <div className="member-add-button">
                    <h1>Suppliers</h1>
                    <button onClick={addSupp}>Add +</button>
                </div>
                <div>
                    <h6>{supplierList}</h6>
                </div>
            </div>
            <Supplierdetail suppDetail = {suppDetail} supplierFo={supplierFo}/>
        </div>
    )
}
export default Supplier