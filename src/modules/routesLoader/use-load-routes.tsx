import { useEffect, useState } from "react";
import { loadRoutesInitActionCreator, loadRoutesResetActionCreator, loadRoutesSuccessActionCreator } from "./ducks/slice";
import { useDispatch, useSelector } from 'react-redux';
import { parseInputRoutes, parseToWeightEdges } from "../../lib/utils/parseInputRoutes";
import { loadedRoutesSelector } from "./ducks/selectors";

const useLoadRoutes = () => {
    const dispatch = useDispatch();
    const [routes, setRoutes] = useState('');
    const [parsedRoutes, setParsedRoutes] = useState([]);
    const [weightEdges, setWeightEdges] = useState(new Array<string>());
    const edgesSelected = useSelector(loadedRoutesSelector);
    const edges = (Object.entries(edgesSelected));

    const loadRoutes = () => {
        dispatch(loadRoutesInitActionCreator);
        const handledInput = parseToWeightEdges(routes);
        setWeightEdges(handledInput);
        // const graph = new Graph(weightEdges);
        const edgesParsed = parseInputRoutes(handledInput);
        setParsedRoutes(edgesParsed);
    }

    const resetLoaded = () => {
        dispatch(loadRoutesResetActionCreator());
        setTimeout(() => setRoutes(''), 0);
    }
    useEffect(() => {
        dispatch(loadRoutesSuccessActionCreator({ parsedRoutes: parsedRoutes, weightEdges: weightEdges }));
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
