import { FormControl, TextField } from "@material-ui/core";
import React from "react";
import usePossibleRoutes from "../use-possible-routes";

const CalculatedRoutes = () => {

    const { possibleRoutes } = usePossibleRoutes();
    return (
        <>
            <div>
                Number of routes
            </div>
            <FormControl>
                Route
                    <TextField id="outlined-basic" value={possibleRoutes} label="routes" variant="outlined" />
            </FormControl>


        </>
    );
}

export default CalculatedRoutes;