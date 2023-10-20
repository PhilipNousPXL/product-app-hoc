// src/components/ElectronicProductComponent.jsx
import React from "react";
import withTaxPriceCalculation from "../higher-order-components/withTaxPriceCalculation";

export function ElectronicProductComponent({product, showPriceWithTax}) {

    return (
        <div>
            <p>{product.name} ({product.brand}), {product.price}$</p>
            <button onClick={showPriceWithTax}>Calculate price with tax</button>
        </div>
    );
}

export default withTaxPriceCalculation(ElectronicProductComponent);


