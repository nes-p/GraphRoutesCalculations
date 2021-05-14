class Graph {
    weightEdges: Array<string>;
    vertices: Set<string> | undefined
    graph: Map<string, Array<Array<string>>> | undefined
    edgesMap: Map<string, number> | undefined
    edgesParsed: any

    constructor(weightEdges: Array<string>) {
        this.weightEdges = weightEdges;
    }

    async parseEdges() {
        console.log('parseEdges')
        this.mapEdges();
        const map = this.edgesMap as Map<string, number>
        const edgesParsed = Object.fromEntries(map.entries());
        this.edgesParsed = edgesParsed;
    }

    async initializeVertices() {
        const vertices = new Set<string>();
        this.weightEdges?.forEach(route => vertices?.add(route[0]));
        this.vertices = vertices;
    }

    async initializeGraph() {

        this.initializeVertices();
        const graph = new Map();
        this.vertices?.forEach(vertice => {
            graph.set(vertice, []);
        });
        this.weightEdges?.forEach(edge =>
            graph.get(edge[0]).push([edge[1], edge.slice(2)])
        );
        this.graph = graph;

    }

    async mapEdges() {

        const routesMap = new Map();
        this.weightEdges?.forEach(element => {
            routesMap.set(element[0] + element[1], parseInt(element.slice(2)))
        });
        //return Object.fromEntries(routesMap.entries());

        this.edgesMap = routesMap;
    }

    calculateDeliveryCost(requestedRoutes: Array<string>) {
        this.mapEdges();
        const routesMap = this.edgesMap;
        const deliveryCost =
            requestedRoutes.reduce((acc, edge) => {
                const edgeCost = routesMap?.get(edge);
                if (!edgeCost) {
                    throw new Error("No Such Route");
                }
                return acc + Number(edgeCost);
            }, 0)
        return deliveryCost;

    }

    possibleRoutes(start: string, finish: string, options: Options) {
        this.initializeGraph();
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
                if (route.cost < costRestrict) possibleRoutes.push(route);
                if (pathReuseRestrict === 1) continue;
            }

            let verticesCurrent = this.graph?.get(lastVertice);
            if (!verticesCurrent) continue;
            let edgeVertices = Object.fromEntries(verticesCurrent);

            for (let vertice in edgeVertices) {
                if (!route.paths[`${lastVertice}${vertice}`] || route.paths[`${lastVertice}${vertice}`] <= pathReuseRestrict) {
                    const pathCount = route.paths[`${lastVertice}${vertice}`] ? route.paths[`${lastVertice}${vertice}`] + 1 : 1;
                    processQueue.push({
                        graphNodes: route.graphNodes.concat(vertice),
                        paths: { ...route.paths, [`${lastVertice}${vertice}`]: pathCount },
                        cost: route.cost + parseInt(edgeVertices[vertice]),
                    });
                }
            }

        }
        return possibleRoutes.filter((route) => route.graphNodes.length <= stopRestrict + 1).length;

    }

}


export default Graph;
interface Route {
    graphNodes: Array<string>
    paths: any,
    cost: number
}
export interface Options {
    stopRestrict: number,
    costRestrict: number,
    pathReuseRestrict: number
}
