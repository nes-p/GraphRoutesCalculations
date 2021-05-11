import { useEffect, useState } from "react";
import { loadRoutesSuccessActionCreator } from "./ducks/slice";
import { useDispatch } from 'react-redux';

const useLoadRoutes = () => {
    const dispatch = useDispatch();
    const [routes, setRoutes] = useState('');
    const [parsedRoutes, setParsedRoutes] = useState([]);
    const loadRoutes = () => {
        const handledInput: any = [];
        setParsedRoutes(handledInput);

    };
    useEffect(() => {
        dispatch(loadRoutesSuccessActionCreator({ parsedRoutes }));
    }, [parsedRoutes, dispatch]
    );
    return {
        routes,
        setRoutes,
        loadRoutes
    };
}

export default useLoadRoutes;
