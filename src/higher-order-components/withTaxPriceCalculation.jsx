// src/higher-order-components/withTaxPriceCalculation.jsx
import React from "react";

//higher-order component
export default function withTaxPriceCalculation(Component) {

    //this is a wrapper component. note: react component are always
    //written in a capital letter. This the actual component
    //that contains the enhanced functionality.
    function NewComponent(props) {

        function calculatePriceWithTax() {
            window.alert(`Price with tax: ${props.product.price * 1.21}$`);
        }

        return <Component {...props} showPriceWithTax={calculatePriceWithTax}/>;
    }

    return NewComponent;
}


