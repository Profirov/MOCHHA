import {isOddOrEven} from "./isOddOrEven.js"
import {expect} from 'chai'

describe("isOddOrEven", () => {
    it ("should return undefined when pass non string value as input", () => {
        const inputValueNumber = 15;
        const inputVAlueUndefined = undefined;
        const inputVAlueNull = null;
        const inputValueFloatNumber = 10.10;

        const resultNumber = isOddOrEven(inputValueFloatNumber);
        const resultUndefined = isOddOrEven(inputVAlueUndefined );
        const resultNull = isOddOrEven(inputVAlueNull);
        const resultFloatNumber = isOddOrEven(inputValueFloatNumber);

        expect(resultNumber).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultFloatNumber).to.be.undefined;
    })
    it("should return even when the input string length is even", () => {
        const evenStringLength = "1234";
        const resultEvenStringLength = isOddOrEven(evenStringLength);
        expect(resultEvenStringLength).to.be.equal('even');
    })
    it("should return odd when the input string length is odd", () => {
        const oddStringLength = "123";
        const resultOddStringLength = isOddOrEven(oddStringLength);
        expect(resultOddStringLength).to.be.equal('odd');
    })
    it("should return even when the inputstring length is 0", () => {
        const zeroLengthString = "";
        const resultZeroLengthString = isOddOrEven(zeroLengthString);
        expect(resultZeroLengthString).to.be.equal('even');
    })
})