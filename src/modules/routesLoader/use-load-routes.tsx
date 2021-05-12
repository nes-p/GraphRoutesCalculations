import { useEffect, useState } from "react";
import { loadRoutesInitActionCreator, loadRoutesResetActionCreator, loadRoutesSuccessActionCreator } from "./ducks/slice";
import { useDispatch, useSelector } from 'react-redux';
import { parseInputRoutes } from "../../lib/utils/parseInputRoutes";
import { loadedRoutesSelector } from "./ducks/selectors";

const useLoadRoutes = () => {
    const dispatch = useDispatch();
    const [routes, setRoutes] = useState('');
    const [parsedRoutes, setParsedRoutes] = useState([]);
    const edgesSelected = useSelector(loadedRoutesSelector);
    const edges = (Object.entries(edgesSelected));
    const loadRoutes = () => {
        dispatch(loadRoutesInitActionCreator);
        const handledInput: any = parseInputRoutes(routes);
        setParsedRoutes(handledInput);
    };
    const resetLoaded = () => {
        dispatch(loadRoutesResetActionCreator());
        setTimeout(() => setRoutes(''), 0);
    }
    useEffect(() => {
        dispatch(loadRoutesSuccessActionCreator(parsedRoutes));
    }, [parsedRoutes, dispatch]
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
