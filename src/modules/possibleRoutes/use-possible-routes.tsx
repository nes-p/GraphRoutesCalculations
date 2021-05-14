import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Graph, { Options } from "../../lib/utils/Graph";
import { loadedRoutesSelector, weightEdgesSelector } from "../routesLoader/ducks";
import { possibleRoutesErrorSelector, possibleRoutesFailureAction, possibleRoutesInitAction, possibleRoutesSelector, possibleRoutesSuccessAction } from "./ducks";

const usePossibleRoutes = () => {
    const dispatch = useDispatch();
    const [route, setRoute] = useState('');
    const [stop, setStop] = useState('');
    const [maximumCost, setMaximumCost] = useState('');
    const [sameRoute, setsameRoute] = useState('');


    const possibleRoutes = useSelector(possibleRoutesSelector);
    const errorPossibleRoutes = useSelector(possibleRoutesErrorSelector);
    const loadedEdges = useSelector(loadedRoutesSelector);
    const weightEdges = useSelector(weightEdgesSelector);
    debugger;
    const graph = new Graph(weightEdges);

    useEffect(() => {
        if (Object.keys(loadedEdges).length === 0) {
            debugger;
            dispatch(possibleRoutesFailureAction('Routes are not loaded. Please, load them at the tab "LoadRoutes".'))
        }
    }, [dispatch, loadedEdges])


    const calculateRoutesNumber = () => {
        const option: Options = {
            stopRestrict: parseInt(stop),
            pathReuseRestrict: parseInt(sameRoute),
            costRestrict: parseInt(maximumCost)

        }
        try {
            dispatch(possibleRoutesInitAction());
            const routesNumber = graph.possibleRoutes(route[0], route[1], option);
            dispatch(possibleRoutesSuccessAction(routesNumber));
        } catch (error) {

        }

    };
    return {
        route, setRoute,
        stop, setStop,
        maximumCost, setMaximumCost,
        sameRoute, setsameRoute,
        calculateRoutesNumber,
        possibleRoutes,
        errorPossibleRoutes
    }
}

export default usePossibleRoutes;