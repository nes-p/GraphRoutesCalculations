import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    clearButton: {
        '&:hover': {
            backgroundColor: '#b6b6b6',
        },
        backgroundColor: '#d3d3d3',
        color: 'black',
        cursor: 'pointer',
    }

}));

const ClearButton = ({ handleClear }: { handleClear: () => void; }) => {
    const classes = useStyles();
    return (
        <Button
            className={classes.clearButton}
            variant="contained"
            color="primary"
            onClick={() => handleClear()}
        >Clear Input
        </Button>



    );
};

export default ClearButton;