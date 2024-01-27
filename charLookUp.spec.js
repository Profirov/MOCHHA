import {lookupChar} from "./charLookUp.js"
import {expect} from 'chai'

describe("lookupChar", () => {
    it("should return undefined when first parameter is from incorrect and second parameter is correct type", () => {
        const inccorectFirstParam = 123;
        const correctSecondParam = 1;
        const undefinedResult = lookupChar(inccorectFirstParam, correctSecondParam);
        expect(undefinedResult).to.be.undefined;
    })
    it("should return undefined when first parameter is from correct type and second parameter is incorrect ", () => {
        const corectFirstParam = "some string here";
        const incorrectSecondParam = "10";
        const undefinedResult = lookupChar(corectFirstParam, incorrectSecondParam);
        expect(undefinedResult).to.be.undefined;
    })
    it("should return undefined when first parameter is from correct type and second parameter is incorrect float type ", () => {
        const corectFirstParam = "some string here";
        const incorrectFloatNumberSecondParam = 10.10;
        const undefinedResult = lookupChar(corectFirstParam, incorrectFloatNumberSecondParam);
        expect(undefinedResult).to.be.undefined;
    })
    it("should return undefined when first parameter is from correct type and second parameter is bigger than  the string length ", () => {
        const corectFirstParam = "some string here";
        const biggerLengthSecondParam = 20;
        const incorrectIndexResult = lookupChar(corectFirstParam, biggerLengthSecondParam);
        expect(incorrectIndexResult).to.be.equal("Incorrect index");
    })
    it("should return undefined when first parameter is from correct type and second parameter is lower than  the string length ", () => {
        const corectFirstParam = "some string here";
        const lowerLengthSecondParam = -20;
        const incorrectIndexResult = lookupChar(corectFirstParam, lowerLengthSecondParam);
        expect(incorrectIndexResult).to.be.equal("Incorrect index");
    })
    it("should return correct when all the parameters are correct ", () => {
        const corectFirstParam = "some string here";
        const correctSecondParam = 1;
        const correctResult = lookupChar(corectFirstParam, correctSecondParam);
        expect(correctResult).to.be.equal("o");
    })

})
