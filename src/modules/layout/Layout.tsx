import { FC } from "react";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import Header from '../../components/header/Header';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(({ spacing, typography, palette }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowX: 'hidden',
        '& h1': typography.h1,
        backgroundColor: palette.grey[100],
    },
    header: {
        marginBottom: spacing(3),
    },
    main: {
        width: '100vw',
    },
}));

const Layout: FC<{ children: React.ReactElement | React.ReactElement[] }> = ({ children }) => {
    const classes = useStyles();
    return (<div>
        <AppBar position="static" className={classes.header}>
            <Header />
        </AppBar>
        <Container component="main" maxWidth="xl" className={classes.main}>
            {children}
        </Container>
    </div>);
};

export default Layout;