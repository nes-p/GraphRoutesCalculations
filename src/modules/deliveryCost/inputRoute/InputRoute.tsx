import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import ClearButton from "../../../components/buttons/ClearInputButton";
import useDeliveryCost from "../use-delivery-cost";


const useStyles = makeStyles(() => ({
    header: {
        fontSize: '18px',
        lineHeight: '16px',
        fontWeight: 600,
        marginBottom: '30px',
    },
    input: {
        display: 'grid'
    }

}));

const InputRoute = () => {
    const classes = useStyles();
    const { route, setRoute, calculateDelivery } = useDeliveryCost();
    const handleInputRoute = (event: any) => {
        setRoute(event.target.value)
    }
    const handleCalculateRoute = () => {
        calculateDelivery();
    }
    const clearInput = () => {
        setRoute('');
    };
    return (
        <FormControl
            className={classes.input}
        >
            <div className={classes.header}>
                Please, enter the route here!
        </div>
            <TextField id="outlined-basic" value={route} onChange={handleInputRoute} label="Ex: A-B-E" variant="outlined" />
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleCalculateRoute()}
            >Calculate!
            </Button>
            <ClearButton handleClear={clearInput} />
        </FormControl>
    );
}

export default InputRoute;