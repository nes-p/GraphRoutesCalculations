import { configureStore } from "@reduxjs/toolkit";
import deliveryCostReducer from "../modules/deliveryCost/ducks";
import possibleRoutesReducer from "../modules/possibleRoutes/ducks";
import loadedRoutesReducer from "../modules/routesLoader/ducks";



export const store = configureStore({
    reducer: {
        loadedRoutes: loadedRoutesReducer,
        deliveryCost: deliveryCostReducer,
        possibleRoutes: possibleRoutesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;