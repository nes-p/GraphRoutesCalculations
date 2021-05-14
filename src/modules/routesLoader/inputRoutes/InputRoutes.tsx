import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import React, { FC } from "react";
import ClearButton from "../../../components/buttons/ClearInputButton";
import useLoadRoutes from "../use-load-routes";


const useStyles = makeStyles(() => ({
    header: {
        fontSize: '18px',
        lineHeight: '16px',
        fontWeight: 600,
        marginBottom: '10px',
    },
    input: {
        display: 'grid'
    }
}));

const InputRoutes: FC = () => {
    const classes = useStyles();
    const { routes, setRoutes, loadRoutes } = useLoadRoutes();

    const handleInputRoutes = (event: any) => {
        setRoutes(event.target.value);
    }
    const handleLoadRoutes = () => {
        loadRoutes();
    };
    const clearInput = () => {
        setRoutes('');
    };
    return (
        <>

            <FormControl
                className={classes.input}
            >
                <div className={classes.header}>Please, load the routes here!</div>
                <TextField id="outlined-basic" value={routes} onChange={handleInputRoutes} label="Ex: AB1, AC4, AD10" variant="outlined" />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleLoadRoutes()}
                >Load!
            </Button>
                <ClearButton handleClear={clearInput} />
            </FormControl>

        </>
    );
}

export default InputRoutes;