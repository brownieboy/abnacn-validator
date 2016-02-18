var chai = require("chai");
var expect = chai.expect;

var validatorObj = require("../dist/abnacn-validate.js");

describe("ABN Validator", function() {
    it("should return true for valid ABNs", function() {

        var abns = ['53 004 085 616', '00 000 000 001'];
        abns.forEach(function(abn) {
            expect(validatorObj.isValidABN(abn)).to.be.true;
        });

    });

    it("should return false for invalid ACNs", function() {

        var abns = ['', '0', '00 000 000 000'];
        abns.forEach(function(abn) {
            expect(validatorObj.isValidABN(abn)).to.not.be.true;
        });

    });

});


describe("ACN Validator", function() {
    it("should return true for valid ACNs", function() {
console.log("Need to trim!!!");
        var acns = ['000 000 019', '000 250 000', '000 500 005', '000 750 005'];
         // var acns = ['000000019', '000250000', '000500005', '000750005'];

        acns.forEach(function(acn) {
            expect(validatorObj.isValidACN(acn)).to.be.true;
        });

    });

    it("should return false for invalid ACNs", function() {

        var acns = ['', '0', '00 000 000 000'];
        acns.forEach(function(acn) {
            expect(validatorObj.isValidACN(acn)).to.not.be.true;
        });

    });

});


