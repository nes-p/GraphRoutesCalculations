import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ActiveLink from '../active-link';


export interface ILink {
    title: string;
    id: string;
    indexInHeader: number;
    route: string;
    featureName?: string;
}

export const masterLinks: Array<ILink> = [
    {
        title: 'Home',
        id: 'home',
        indexInHeader: 0,
        route: '/home',
    },
    {
        title: 'LoadRoutes',
        id: 'loadroutes',
        indexInHeader: 1,
        route: '/loadroutes',
    },
    {
        title: 'Case1',
        id: 'case1',
        indexInHeader: 2,
        route: '/case1',
    },
    {
        title: 'Case2',
        id: 'case2',
        indexInHeader: 2,
        route: '/case2',
    },

];


const useStyles = makeStyles(() => ({
    linksBar: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));

const LinksBar: FC = () => {
    const classes = useStyles();

    return (
        <nav className={classes.linksBar}>
            {masterLinks.map(({ route, title, id }) => {
                return (
                    <ActiveLink key={id} to={route}>
                        {title}
                    </ActiveLink>
                );
            })}
        </nav>
    );
};

export default LinksBar;
