import { configureStore } from "@reduxjs/toolkit";
import deliveryCostReducer from "../modules/deliveryCost/ducks";
import loadedRoutesReducer from "../modules/routesLoader/ducks";


export const store = configureStore({
    reducer: {
        loadedRoutes: loadedRoutesReducer,
        deliveryCost: deliveryCostReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;