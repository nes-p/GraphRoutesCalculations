export const parseToWeightEdges = (sourceRoutes: string) => {
    const weightEdgesArray = sourceRoutes.split(',').map(item => item.trim());
    return weightEdgesArray;
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


export const parseInputRoutes = (sourceRoutes: string) => {
    const routesArray = parseToWeightEdges(sourceRoutes);
    const routesMap = new Map();
    routesArray.forEach(element => {
        routesMap.set(element[0] + element[1], parseInt(element.slice(2)))
    });
    return Object.fromEntries(routesMap.entries());
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

// export const parsetoGraph = (sourceRoutes: string) => {
//     const routesArray = parseToWeightEdges(sourceRoutes);
//     const vertices = addVertices(routesArray);
//     const graph = new Map();
//     vertices.forEach(vertice => {
//         graph.set(vertice, []);
//     });

// }

// const addVertices = (routesWeight: string[]) => {
//     var vertices = new Set();
//     routesWeight.forEach(route => vertices.add(route[0]));
//     return vertices;
// }

