const { expect } = require("chai")
const calc = require("../app/calculator")
describe("Calc Tests", function () {
    // it('add pass: add(7,2) should return 9', function() {
    //     const result = calc.add(7,2)
    //     console.log('pass: add(7,2 expected 9, got', result)
    //     expect(result).to.equal(9)
    // });

    // it('add fail: add(7,2 should return 8)', function() {
    //     const result = calc.add(7,2)
    //     console.log('fail: add(7,2 expected 8', result)
    //     expect(result).to.equal(8)
    // });

    // it('sub pass: sub(24,3) should return 21', function() {
    //     const result = calc.sub(24,3)
    //     console.log('pass: sub(24,3) expected 21, and got', result)
    //     expect(result).to.equal(21)
    // })
    // it('sub fail: sub(24,3) should return 17', function() {
    //     const result = calc.sub(24,3)
    //     console.log('fail: sub(24,3) expected 17, got', result)
    //     expect(result).to.equal(17)
    // })





    // it('multiple pass: multiple(200, 12) should return 2400', function() {
    //     const result = calc.mul(200, 12)
    //     console.log('pass: multiple(200, 12) expected 2400 and got', result)
    //     expect(result).to.equal(2400)
    // })

    // it('multiple fail: multiple(200, 12) should return 2250', function() {
    //     const result = calc.mul(200, 12)
    //     console.log('fail: multiple(200, 12) expected 2250, got', result)
    //     expect(result).to.equal(2250)
    // })


    it('div pass : div(20, 2) should return 10', function() {
        const result = calc.div(20, 2)
        console.log('pass: div(20,2) expected 10 and got', result)
        expect(result).to.equal(10)
    } )

    it('div fail: div(20,2) should return 5', function() {
        const result = calc.div(20,2)
        console.log('fail: fiv(20,2) expected 5, got', result)
        expect(result).to.equal(5)
    })
})