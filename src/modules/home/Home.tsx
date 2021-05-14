
import { Grid, makeStyles } from "@material-ui/core";
import { FC } from "react";


const useStyles = makeStyles((typography) => ({
    header: {
        fontSize: '18px',
        lineHeight: '16px',
        fontWeight: 600,
        marginBottom: '10px',
    },
    grid: {
        minHeight: '100vh',
    }
}));

const Home: FC = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.grid} container justify="center" alignItems="center" spacing={0}>
            <div className={classes.header}>
                Welcom to Eko Delivery Service!
          </div>

        </Grid>
    )

};

export default Home;