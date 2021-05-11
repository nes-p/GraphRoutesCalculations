import React, { FC } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import LinksBar from "../links-bar/LinksBar";

const useStyles = makeStyles(({ mixins }) => ({
    linksToolbar: {
        // ...mixins.linksToolbarMixin,
        minHeight: '45px',
        '& nav > :first-child': {
            paddingLeft: 0,
        },
    },
}));

const Header: FC = () => {
    const classes = useStyles();

    return (
        <Toolbar className={classes.linksToolbar}>
            <LinksBar />
        </Toolbar>
    );
};

export default Header;
