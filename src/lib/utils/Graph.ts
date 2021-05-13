class Graph {
    vertices: Set<string>;
    weightEdges: Array<string>;
    graph: Map<string, Array<Array<string>>>
    edgesParsed: any;
    constructor(weightEdges: Array<string>) {
        this.vertices = this.initializeVertices(weightEdges);
        this.weightEdges = weightEdges;
        this.graph = this.initializeGraph()
        this.edgesParsed = this.parseEdges()

    }

    initializeVertices = (routesWeight: string[]): Set<string> => {
        var vertices = new Set<string>();
        routesWeight.forEach(route => vertices.add(route[0]));
        return vertices;
    }

    initializeGraph = () => {
        const graph = new Map();
        this.vertices.forEach(vertice => {
            graph.set(vertice, []);
        });
        this.weightEdges.forEach(edge =>
            graph.get(edge[0]).push([edge[1], edge.slice(2)])
        );
        return graph;

    }

    parseEdges = () => {
        const routesMap = new Map();
        this.weightEdges.forEach(element => {
            routesMap.set(element[0] + element[1], parseInt(element.slice(2)))
        });
        return Object.fromEntries(routesMap.entries());
    }

    calculateDeliveryCost = (requestedRoutes: Array<string>, existedRoutes: any) => {
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

    possibleRoutes = (start: string, finish: string, options: Options) => {
        const stopRestrict = (options && options.stopRestrict) || Infinity;
        const costRestrict = (options && options.costRestrict) || Infinity;
        const pathReuseRestrict = (options && options.pathReuseRestrict) || 1;

        let possibleRoutes = [];
        let processQueue: Route[] = [{ graphNodes: [start], paths: {}, cost: 0 }];

        while (true) {
            let route = processQueue.shift();
            if (!route) break;

            let lastVertice = route.graphNodes[route.graphNodes.length - 1];

            if (route.cost !== 0 && lastVertice === finish) {
                if (route.cost <= costRestrict) possibleRoutes.push(route);
                if (pathReuseRestrict === 1) continue;
            }

            let verticesCurrent = this.graph.get(lastVertice);
            if (!verticesCurrent) continue;
            let edgeVertices = Object.fromEntries(verticesCurrent);
            // let verticesMap = new Map(Object.entries(edgeVertices)) as Map<string, number>;

            // verticesMap.forEach((weight, vertice) => {
            //     if (!route?.paths.get(`${lastVertice}${vertice}`) || (route.paths.get(`${lastVertice}${vertice}`) as number) < pathReuseRestrict) {
            //         const pathCount = route?.paths.get(`${lastVertice}${vertice}`) ? (route.paths.get(`${lastVertice}${vertice}`) as number) + 1 : 1;
            //         processQueue.push({
            //             graphNode: route?.graphNode.concat(vertice) as string[],
            //             paths: { ...route?.paths, [`${lastVertice}${vertice}`]: pathCount } as Map<string, number>,
            //             cost: route?.cost as number + weight,
            //         });
            //     }
            // })
            for (let vertice in edgeVertices) {
                if (!route.paths[`${lastVertice}${vertice}`] || route.paths[`${lastVertice}${vertice}`] < pathReuseRestrict) {
                    const pathCount = route.paths[`${lastVertice}${vertice}`] ? route.paths[`${lastVertice}${vertice}`] + 1 : 1;
                    processQueue.push({
                        graphNodes: route.graphNodes.concat(vertice),
                        paths: { ...route.paths, [`${lastVertice}${vertice}`]: pathCount },
                        cost: route.cost + edgeVertices[vertice],
                    });
                }
            }

            processQueue = processQueue.sort((prev, next) => prev.cost - next.cost);





        }

        return possibleRoutes.filter((route) => route.graphNodes.length <= stopRestrict + 1);

    }

}


export default Graph;
interface Route {
    graphNodes: Array<string>
    paths: any,
    cost: number
}
interface Options {
    stopRestrict: number,
    costRestrict: number,
    pathReuseRestrict: number
}
