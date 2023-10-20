import React from "react";
import ElectronicProductComponent from "./ElectronicProductComponent";
import ElectronicProduct from "../models/ElectronicProduct";
import HouseProduct from "../models/HouseProduct";
import HouseProductComponent from "./HouseProductComponent";

//app component.
//this is basically the start of the React application
export default function app() {

    const electronicProduct = new ElectronicProduct( "Laptop", 300, "HP");

    const houseProduct = new HouseProduct("Chair", 250);

        return (
        <>
            <h1>Higher-order component store</h1>
            <ul>
                <ElectronicProductComponent product={electronicProduct}></ElectronicProductComponent>
                <HouseProductComponent product={houseProduct}></HouseProductComponent>
            </ul>
        </>
    );
}
