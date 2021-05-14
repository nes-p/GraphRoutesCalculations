import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Graph from "../../lib/utils/Graph";
import { parseCostRequest } from "../../lib/utils/parseInputRoutes";
import { loadedRoutesSelector, weightEdgesSelector } from "../routesLoader/ducks";
import { deliveryCostSelector, deliveryErrorSelector } from "./ducks/selectors";
import { deliveryCostFailureAction, deliveryCostSuccessAction } from "./ducks/slice";

const useDeliveryCost = () => {
    const dispatch = useDispatch();
    const [route, setRoute] = useState('');
    const loadedEdges = useSelector(loadedRoutesSelector);
    const deliveryCostCalculated = useSelector(deliveryCostSelector);
    const errorDelivery = useSelector(deliveryErrorSelector);
    const weightEdges = useSelector(weightEdgesSelector);
    const graph = new Graph(weightEdges);
    const calculateDelivery = () => {
        const parsedInput = parseCostRequest(route);
        if (!loadedEdges) {
            dispatch(deliveryCostFailureAction('Routes are not loaded'))
        }
        try {
            const delivery = graph.calculateDeliveryCost(parsedInput)
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

