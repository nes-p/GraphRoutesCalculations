import Button from '@material-ui/core/Button';
import { FormControl, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    resetButton: {
        cursor: 'pointer',
        border: '1px solid',
        borderRadius: '3px',
        boxSizing: 'border-box',
        display: 'grid'
    }

}));

const ResetButton = ({ handleReset }: { handleReset: () => void; }) => {
    const classes = useStyles();
    return (
        <FormControl
            className={classes.resetButton}>
            <Button
                onClick={handleReset}
            >
                Reset Result
        </Button>
        </FormControl>


    );
};

export default ResetButton;