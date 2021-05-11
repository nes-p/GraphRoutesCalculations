import React, { FC, SyntheticEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ mixins, palette }) =>
    createStyles({
        link: {
            // ...mixins.availableLinkMixin,
            marginRight: '30px',
            textDecoration: 'none',
        },
        active: { color: palette.primary.main },

    })
);

export interface IActiveLinkProps {
    disabled?: boolean;
    to: string;
    children: React.ReactNode[] | React.ReactNode;
}

const ActiveLink: FC<IActiveLinkProps> = ({ disabled, to, children }) => {
    const classes = useStyles();

    const handleLinkClick = (event: SyntheticEvent) => {
        if (disabled) event.preventDefault();
    };

    return (
        <NavLink
            className={`${classes.link}         
             `}
            to={to}
            activeClassName={classes.active}
            onClick={handleLinkClick}
            data-testid={`link-${children?.toString().replace(/\W/g, '-').toLowerCase()}`}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;