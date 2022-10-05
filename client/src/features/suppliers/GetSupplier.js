import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchSuppliers} from "./suppliersSlice"
import SuppliersList from "./Suppliers";

function GetSuppliers(){
    const supplierList = useSelector((state)=> state)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchSuppliers());
    }, [dispatch])

    return(
        <div className="memeber-detail-parent">
            <SuppliersList supplierList={supplierList} />
        </div>
    )
}

export default GetSuppliers