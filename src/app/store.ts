import { configureStore } from "@reduxjs/toolkit";
import loadedRoutesReducer from "../modules/inputRouts/ducks";

export const store = configureStore({
    reducer: {
        loadedRoutes: loadedRoutesReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>;