
import { FC } from 'react';
import ResetButton from '../../components/buttons/ResetButton';
import InputRoutes from './inputRoutes/InputRoutes';
import LoadedRoutes from './loadedRoutes';
import useLoadRoutes from './use-load-routes';

const LoadRoutes: FC = ({ match: { url } }: any) => {
    const { resetLoaded } = useLoadRoutes();
    const handleResetLoaded = () => { resetLoaded() };
    return (
        <>
            <InputRoutes />
            <ResetButton handleReset={handleResetLoaded} />
            <LoadedRoutes />
        </>
    );
};

export default LoadRoutes;