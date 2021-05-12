import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { FC } from "react";
import useLoadRoutes from "../use-load-routes";
const LoadedRoutes: FC = () => {
    const { edges, resetLoaded } = useLoadRoutes();
    const handleResetLoaded = () => { resetLoaded(); };
    const hasEdges = edges.length > 0;
    return (
        hasEdges ? (
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Available Routes</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {edges.map(([key, value]: any) => (
                            <TableRow key={key} >
                                <TableCell>{key}</TableCell>
                                <TableCell>
                                    {value}
                                </TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>

                <Button
                    onClick={handleResetLoaded}
                > Reset Loaded</Button>

            </TableContainer>
        ) : <></>

    );
}
export default LoadedRoutes;