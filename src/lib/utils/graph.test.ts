import Graph, { Options } from "./Graph";

describe('graphTests', () => {
    const testRoutesInput = [
        "AB1",
        "AC4",
        "AD10",
        "BE3",
        "CD4",
        "CF2",
        "DE1",
        "EB3",
        "EA2",
        "FD1"]
    const graph = new Graph(testRoutesInput);
    it('calculateDeliveryCost', () => {
        const testReruestInput = ["EA", "AC", "CF"]
        expect(graph.calculateDeliveryCost(testReruestInput)).toBe(8);
    });

    it('possibleRoutes', () => {
        const option: Options = {
            costRestrict: 20,
            pathReuseRestrict: 2
        }

        expect(graph.possibleRoutes('E', 'E', option)).toBe(29);
    });
});