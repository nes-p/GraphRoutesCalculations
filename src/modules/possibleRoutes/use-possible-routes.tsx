import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Graph, { Options } from "../../lib/utils/Graph";
import { weightEdgesSelector } from "../routesLoader/ducks";
import { possibleRoutesErrorSelector, possibleRoutesSelector, possibleRoutesSuccessAction } from "./ducks";

const usePossibleRoutes = () => {
    const dispatch = useDispatch();
    const [route, setRoute] = useState('');
    const [stop, setStop] = useState('');
    const [maximumCost, setMaximumCost] = useState('');
    const [sameRoute, setsameRoute] = useState('');


    const possibleRoutes = useSelector(possibleRoutesSelector);
    const errorPossibleRoutes = useSelector(possibleRoutesErrorSelector);

    const weightEdges = useSelector(weightEdgesSelector);
    debugger;
    const graph = new Graph(weightEdges);


    const calculateRoutesNumber = () => {
        const option: Options = {
            stopRestrict: parseInt(stop),
            pathReuseRestrict: parseInt(sameRoute),
            costRestrict: parseInt(maximumCost)

        }
        try {
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