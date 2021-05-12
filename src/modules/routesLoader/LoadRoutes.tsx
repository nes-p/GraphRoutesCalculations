
import React, { FC } from 'react';
import InputRoutes from './inputRoutes/InputRoutes';
import LoadedRoutes from './loadedRoutes';


const LoadRoutes: FC = ({ match: { url } }: any) => {
    return (
        <>
            <InputRoutes />
            <LoadedRoutes />
        </>
    );
};

export default LoadRoutes;