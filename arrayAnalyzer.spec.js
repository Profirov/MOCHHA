import {analyzeArray} from "./arrayAnalyzer.js"
import {expect} from 'chai'

describe("analyzerArray", () => {
    it("should return undefined when pass non-array as input", () => {
        const nonArrayInput = "someString";
        const undefinedResult = analyzeArray(nonArrayInput);
        expect(undefinedResult).to.be.undefined;
    })
    it("should return undefined when pass empty array as input", () => {
        const emptyArrayInput = [];
        const undefinedResult = analyzeArray(emptyArrayInput);
        expect(undefinedResult).to.be.undefined;
    })
    it("should return correct value when pass array with different numbers as input", () => {
        const ArrayInput = [3, 5, -2, 4, 1];
        const correctResult = analyzeArray(ArrayInput);
        expect(correctResult).to.deep.equal({min: -2, max: 5, length: 5});
    })
    it("should return correct value when pass array with single element as input", () => {
        const ArrayInput = [3];
        const correctResult = analyzeArray(ArrayInput);
        expect(correctResult).to.deep.equal({min: 3, max: 3, length: 1});
    })
    it("should return correct value when pass array with same elements as input", () => {
        const ArrayInput = [7, 7, 7];
        const correctResult = analyzeArray(ArrayInput);
        expect(correctResult).to.deep.equal({min: 7, max: 7, length: 3});
    })

})