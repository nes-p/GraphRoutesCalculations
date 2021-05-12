import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import useDeliveryCost from "../use-delivery-cost";



const InputRoute = () => {
    const { route, setRoute, calculateDelivery } = useDeliveryCost();
    const handleInputRoute = (event: any) => {
        setRoute(event.target.value)
    }
    const handleCalculateRoute = () => {
        calculateDelivery();
    }
    return (
        <>

            <div>
                Routes are loaded
        </div>
            <div>
                Please, enter the route here!
        </div>
            <FormControl>
                <TextField id="outlined-basic" value={route} onChange={handleInputRoute} label="routes" variant="outlined" />
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleCalculateRoute()}
            >Enter!
            </Button>
        </>
    );
}

export default InputRoute;