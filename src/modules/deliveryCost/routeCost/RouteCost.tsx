import useDeliveryCost from "../use-delivery-cost";

const RouteCost = () => {
    const { deliveryCostCalculated, errorDelivery } = useDeliveryCost();
    const hasCosts = deliveryCostCalculated && deliveryCostCalculated > 0;
    const hasError = errorDelivery !== undefined;
    return (
        <>
            {hasCosts ? deliveryCostCalculated : ''}
            {hasError ? errorDelivery : ''}

        </>
    )

}

export default RouteCost;