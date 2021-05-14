import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { FC } from "react";
import useLoadRoutes from "../use-load-routes";

const InputRoutes: FC = () => {
    const { routes, setRoutes, loadRoutes } = useLoadRoutes();

    const handleInputRoutes = (event: any) => {
        setRoutes(event.target.value);
    }
    const handleLoadRoutes = () => {
        loadRoutes();
    };
    return (
        <>
            <div>
                Please, load the routes here!
        </div>
            <FormControl>
                <TextField id="outlined-basic" value={routes} onChange={handleInputRoutes} label="routes" variant="outlined" />
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleLoadRoutes()}
            >Load!
            </Button>
        </>
    );
}

export default InputRoutes;