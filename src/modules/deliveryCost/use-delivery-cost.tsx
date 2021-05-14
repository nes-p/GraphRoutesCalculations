import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Graph from "../../lib/utils/Graph";
import { parseCostRequest } from "../../lib/utils/parseInputRoutes";
import { loadedRoutesSelector, weightEdgesSelector } from "../routesLoader/ducks";
import { deliveryCostSelector, deliveryErrorSelector } from "./ducks/selectors";
import { deliveryCostFailureAction, deliveryCostInitAction, deliveryCostResetAction, deliveryCostSuccessAction } from "./ducks/slice";

const useDeliveryCost = () => {
    const dispatch = useDispatch();
    const [route, setRoute] = useState('');
    const loadedEdges = useSelector(loadedRoutesSelector);
    const deliveryCostCalculated = useSelector(deliveryCostSelector);
    const errorDelivery = useSelector(deliveryErrorSelector);
    const weightEdges = useSelector(weightEdgesSelector);
    const graph = new Graph(weightEdges);
    useEffect(() => {
        if (Object.keys(loadedEdges).length === 0) {
            debugger;
            dispatch(deliveryCostFailureAction('Routes are not loaded. Please, load them at the tab "LoadRoutes".'))
        }
    }, [dispatch, loadedEdges])

    const calculateDelivery = () => {
        dispatch(deliveryCostInitAction());
        const parsedInput = parseCostRequest(route);
        try {
            const delivery = graph.calculateDeliveryCost(parsedInput)
            dispatch(deliveryCostSuccessAction(delivery));
        }
        catch (error) {
            dispatch(deliveryCostFailureAction(error.message))
        }

    };
    const resetCalc = () => {
        dispatch(deliveryCostResetAction());

    }
    return {
        route,
        setRoute,
        calculateDelivery,
        deliveryCostCalculated,
        errorDelivery,
        resetCalc
    }
}

export default useDeliveryCost;

