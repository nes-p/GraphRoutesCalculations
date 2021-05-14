import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { FC } from "react";
import useLoadRoutes from "../use-load-routes";

const useStyles = makeStyles(() => ({
    tableColumnHeader: {
        fontWeight: 600,
    },
}));

const LoadedRoutes: FC = () => {
    const classes = useStyles();
    const { edges } = useLoadRoutes();
    const hasEdges = Object.keys(edges).length > 0
        && !isNaN((edges.pop()?.[1] as number));
    return (
        hasEdges ? (
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell className={classes.tableColumnHeader}>Available Routes</TableCell>
                            <TableCell className={classes.tableColumnHeader}>Cost</TableCell>
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
            </TableContainer>
        ) : <>
        </>

    );
}
export default LoadedRoutes;