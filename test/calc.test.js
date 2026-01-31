const { expect } = require("chai")
const calc = require("../app/calculator")
describe("Calc Tests", function () {
    it('add pass: add(7,2) should return 9', function() {
        const result = calc.add(7,2)
        console.log('pass: add(7,2 expected 9, got', result)
        expect(result).to.equal(9)
    });

    it('add fail: add(7,2 should return 8', function() {
        const result = calc.add(7,2)
        console.log('fail: add(7,2 expected 8', result)
        expect(result).to.equal(8)
    });
})