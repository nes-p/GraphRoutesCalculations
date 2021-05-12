export const parseInputRoutes = (sourceRoutes: string) => {
    const routesMap = new Map();
    const routesArray = sourceRoutes.split(',').map(item => item.trim());
    routesArray.forEach(element => {
        routesMap.set(element[0] + element[1], parseInt(element.slice(2)))
    });
    return Object.fromEntries(routesMap.entries());
}

export const parseCostRequest = (sourceRequest: string) => {
    const requestArray = sourceRequest.split('-');
    let previousNode = '';
    const edges = requestArray.reduce((acc: any, currentNode: any) => {
        if (!!previousNode) {
            acc.push(previousNode + currentNode);
        }
        previousNode = currentNode;
        return acc;
    }, [] as any)
    return edges;
}

export const calculateDeliveryCost = (requestedRoutes: Array<string>, existedRoutes: any) => {
    const routesMap = new Map(Object.entries(existedRoutes));
    const deliveryCost =
        requestedRoutes.reduce((acc, edge, index, array) => {
            const edgeCost = routesMap.get(edge);
            if (!edgeCost) {
                throw new Error("No Such Route");
            }
            return acc + Number(edgeCost);
        }, 0)
    return deliveryCost;

}