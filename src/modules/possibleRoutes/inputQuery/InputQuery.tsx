import { Button, FormControl, TextField } from "@material-ui/core";
import React from "react";
import usePossibleRoutes from "../use-possible-routes";

const InputQuery = () => {

    const { route, setRoute, stop, setStop, maximumCost, setMaximumCost, sameRoute, setsameRoute, calculateRoutesNumber } = usePossibleRoutes();

    const handleInputRoute = (event: any) => {
        setRoute(event.target.value);
    }
    const handleStop = (event: any) => {
        setStop(event.target.value);
    }
    const handleCost = (event: any) => {
        setMaximumCost(event.target.value);
    }
    const handleSameRoute = (event: any) => {
        setsameRoute(event.target.value);
    }

    const handleCalculate = () => {
        calculateRoutesNumber();
    };
    return (
        <>
            <div>
                Please, load the routes here!
            </div>
            <FormControl>
                Route
                    <TextField id="outlined-basic" value={route} onChange={handleInputRoute} label="routes" variant="outlined" />
            </FormControl>
            <FormControl>
                Maximum Stops
                    <TextField id="outlined-basic" value={stop} onChange={handleStop} label="routes" variant="outlined" />
            </FormControl>
            <FormControl>
                Maximum Cost
                    <TextField id="outlined-basic" value={maximumCost} onChange={handleCost} label="routes" variant="outlined" />
            </FormControl>
            <FormControl>
                Same Route
                    <TextField id="outlined-basic" value={sameRoute} onChange={handleSameRoute} label="routes" variant="outlined" />
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleCalculate()}
            >Load!
                </Button>
        </>
    );


}

export default InputQuery;