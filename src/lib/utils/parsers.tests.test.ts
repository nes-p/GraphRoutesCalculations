import { parseCostRequest, parseToWeightEdges } from "./parseInputRoutes";

describe('parsersTests', () => {
    it('calculateDeliveryCost', () => {
        const testRoutesInput = 'AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1';
        const result = [
            "AB1",
            "AC4",
            "AD10",
            "BE3",
            "CD4",
            "CF2",
            "DE1",
            "EB3",
            "EA2",
            "FD1"
        ]
        expect(parseToWeightEdges(testRoutesInput)).toStrictEqual(result);
    });

    it('possibleRoutes', () => {
        const testRequestInput = 'E-A-C-F';
        const result = ["EA", "AC", "CF"]
        expect(parseCostRequest(testRequestInput)).toStrictEqual(result);
    });
});