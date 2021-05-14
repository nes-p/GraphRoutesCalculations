import { FormControl, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import usePossibleRoutes from "../use-possible-routes";
const useStyles = makeStyles(() => ({
    grid: {
        marginTop: '50px',
    },

}));
const CalculatedRoutes = () => {
    const classes = useStyles();
    const { possibleRoutes, errorPossibleRoutes } = usePossibleRoutes();
    return (
        <Grid className={classes.grid} container justify="center" alignItems="center" spacing={0}>

            {errorPossibleRoutes ? (
                <FormControl>
                    <h1>{errorPossibleRoutes}</h1>
                </FormControl>
            ) : (

                <FormControl>
                    Resulted Number of Routes
                    <TextField id="outlined-basic" value={possibleRoutes} label="routes" variant="outlined" />
                </FormControl>
            )}
        </Grid>


    );
}

export default CalculatedRoutes;