import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import usePossibleRoutes from "../use-possible-routes";

const useStyles = makeStyles(() => ({
    header: {
        fontSize: '18px',
        lineHeight: '16px',
        fontWeight: 600,
        marginBottom: '30px',
    },
    input: {
        display: 'grid'
    },
    button: {
        marginTop: '23px',
        height: '54px',
        width: '120px'
    }

}));

const InputQuery = () => {
    const classes = useStyles();
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
            <div className={classes.header} >
                Please, enter the route conditions here!
            </div>

            <FormControl>
                Route
                    <TextField id="outlined-basic" value={route} onChange={handleInputRoute} label="Ex.: EE" variant="outlined" />
            </FormControl>
            <FormControl>
                Maximum Stops
                    <TextField id="outlined-basic" value={stop} onChange={handleStop} label="Ex.: 4" variant="outlined" />
            </FormControl>
            <FormControl>
                Maximum Cost
                    <TextField id="outlined-basic" value={maximumCost} onChange={handleCost} label="Ex.: 20" variant="outlined" />
            </FormControl>
            <FormControl>
                Times Same Route Can Be Used
                    <TextField id="outlined-basic" value={sameRoute} onChange={handleSameRoute} label="Ex.: 1" variant="outlined" />
            </FormControl>
            <FormControl>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={() => handleCalculate()}
                >Calculate!
                </Button>
            </FormControl>
        </>
    );


}

export default InputQuery;