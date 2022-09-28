import React from "react";
import Supplierdetail from "./Supplierdetail";

class Customer extends React.Component{
    render() {
        return(
            <div className="sup-div">
                <div>
                    <div>
                        <h1>Customers</h1>
                        <button>+</button>
                    </div>
                    <div>
                        <h6>Customer Sample</h6>
                    </div>
                </div>
                <Supplierdetail />
            </div>
        )
    }
}

export default Customer