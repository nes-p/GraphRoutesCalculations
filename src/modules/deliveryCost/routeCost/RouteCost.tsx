import { Grid, makeStyles } from "@material-ui/core";
import useDeliveryCost from "../use-delivery-cost";
const useStyles = makeStyles(() => ({
    header: {
        fontSize: '18px',
        lineHeight: '16px',
        fontWeight: 600,
        marginBottom: '30px',
    },
    grid: {
        marginTop: '50px',
    },

}));
const RouteCost = () => {
    const classes = useStyles();
    const { deliveryCostCalculated, errorDelivery } = useDeliveryCost();
    const hasCosts = deliveryCostCalculated && deliveryCostCalculated > 0;
    const hasError = errorDelivery !== undefined;

    return (
        <Grid className={classes.grid} container justify="center" alignItems="center" spacing={0}>
            {hasCosts ?
                <h1>
                    Delivery cost for given delivery route is: {deliveryCostCalculated}
                </h1>
                : ''}
            {hasError ? <h1>{errorDelivery}</h1>
                : ''}
        </Grid>


    )

}

export default RouteCost;