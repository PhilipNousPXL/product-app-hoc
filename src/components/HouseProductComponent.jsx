// src/components/HouseProductComponent.jsx
import React from "react";
import withTaxPriceCalculation from "../higher-order-components/withTaxPriceCalculation";

export function HouseProductComponent({product, showPriceWithTax}) {

    return (
        <div>
            <p>{product.name}, {product.price}$</p>
            <button onClick={showPriceWithTax}>Calculate price with tax</button>
        </div>
    );
}

export default withTaxPriceCalculation(HouseProductComponent);


