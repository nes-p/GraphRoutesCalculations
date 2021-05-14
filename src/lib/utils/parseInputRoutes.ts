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


export const parseInputRoutes = (routesArray: string[]) => {
    const routesMap = new Map();
    routesArray.forEach(element => {
        routesMap.set(element[0] + element[1], parseInt(element.slice(2)))
    });
    return Object.fromEntries(routesMap.entries());
}

