
import React, { FC } from 'react';
import InputRoutes from './inputRoutes/InputRoutes';


const LoadRoutes: FC = ({ match: { url } }: any) => {
    return (<InputRoutes />);
};

export default LoadRoutes;