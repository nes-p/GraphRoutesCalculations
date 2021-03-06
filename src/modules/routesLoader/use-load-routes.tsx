import { useEffect, useState } from "react";
import { loadRoutesInitAction, loadRoutesResetAction, loadRoutesSuccessAction } from "./ducks/slice";
import { batch, useDispatch, useSelector } from 'react-redux';
import { parseToWeightEdges } from "../../lib/utils/parseInputRoutes";
import { loadedRoutesSelector } from "./ducks/selectors";
import { deliveryCostResetAction } from "../deliveryCost/ducks";
import { possibleRoutesCostResetAction } from "../possibleRoutes/ducks";
import Graph from "../../lib/utils/Graph";

const useLoadRoutes = () => {
    const dispatch = useDispatch();
    const [routes, setRoutes] = useState('');
    const [parsedRoutes, setParsedRoutes] = useState([]);
    const [weightEdges, setWeightEdges] = useState(new Array<string>());
    const edgesSelected = useSelector(loadedRoutesSelector);
    const edges = (Object.entries(edgesSelected));

    const loadRoutes = () => {
        dispatch(loadRoutesInitAction);
        const handledInput = parseToWeightEdges(routes);
        setWeightEdges(handledInput);
        const graph = new Graph(handledInput);
        setParsedRoutes(graph.edgesParsed);
    }

    const resetLoaded = () => {
        dispatch(loadRoutesResetAction());
        setTimeout(() => setRoutes(''), 0);
    }
    useEffect(() => {
        batch(() => {
            dispatch(loadRoutesSuccessAction({ parsedRoutes: parsedRoutes, weightEdges: weightEdges }));
            dispatch(deliveryCostResetAction());
            dispatch(possibleRoutesCostResetAction());
        });
    }, [parsedRoutes, weightEdges, dispatch]
    );
    return {
        routes,
        setRoutes,
        loadRoutes,
        edges,
        resetLoaded
    };
}

export default useLoadRoutes;
