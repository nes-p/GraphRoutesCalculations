import React from "react";
import ResetButton from "../../components/buttons/ResetButton";
import InputRoute from "./inputRoute/InputRoute";
import RouteCost from "./routeCost/RouteCost";
import useDeliveryCost from "./use-delivery-cost";

const DeliveryCost = () => {
    const { resetCalc } = useDeliveryCost();
    const handleResetCalc = () => { resetCalc() };
    return (<>
        <InputRoute />
        <ResetButton handleReset={handleResetCalc} />
        <RouteCost />
    </>);
}

export default DeliveryCost;