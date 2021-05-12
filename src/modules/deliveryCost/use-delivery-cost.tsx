import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateDeliveryCost, parseCostRequest } from "../../lib/utils/parseInputRoutes";
import { loadedRoutesSelector } from "../routesLoader/ducks";
import { deliveryCostSelector, deliveryErrorSelector } from "./ducks/selectors";
import { deliveryCostFailureAction, deliveryCostSuccessAction } from "./ducks/slice";

const useDeliveryCost = () => {
    const dispatch = useDispatch();
    const [route, setRoute] = useState('');
    const loadedEdges = useSelector(loadedRoutesSelector);
    const deliveryCostCalculated = useSelector(deliveryCostSelector);
    const errorDelivery = useSelector(deliveryErrorSelector);
    const calculateDelivery = () => {
        const parsedInput = parseCostRequest(route);
        if (!loadedEdges) {
            dispatch(deliveryCostFailureAction('Routes are not loaded'))
        }
        try {
            const delivery = calculateDeliveryCost(parsedInput, loadedEdges)
            dispatch(deliveryCostSuccessAction(delivery));
        }
        catch (error) {
            dispatch(deliveryCostFailureAction(error.message))
        }

    };
    return {
        route,
        setRoute,
        calculateDelivery,
        deliveryCostCalculated,
        errorDelivery
    }
}

export default useDeliveryCost;

