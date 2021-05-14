import React from "react";
import CalculatedRoutes from "./calculatedRoutes/CalculatedRoutes";
import InputQuery from "./inputQuery";

const PossibleRoutes = () => {
    return (<>
        <InputQuery />
        <CalculatedRoutes />
    </>);
}

export default PossibleRoutes;