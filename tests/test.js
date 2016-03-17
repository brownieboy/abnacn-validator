var chai = require("chai");
var expect = chai.expect;

var validatorObj = require("../dist/abnacn-validator.js");

// Use http://www.clearwater.com.au/code to check valid ABN.  Lookup
// existing ABNs at http://abr.business.gov.au/
var abns = ['83 914 571 673', '96 001 217 847', '21 000 006 226', '15 000 122 850', '52 097 227 177'];
var acns = ['000 000 019', '000 250 000', '000 500 005', '000 750 005'];
var abnsAndAcns = abns.concat(acns);
var acnsAndAbns = acns.concat(abns);
var invalidAbns = ['', '0', '00 000 000 000', '83 914 571 672', '52 097 227 178', '21 000 006 227'];
var invalidAcns = ['', '0', '00 000 000 000'];
var invalidAbnsOrAcns = ['', '0', '00 000 000 000'];

describe("ABN Validator", function() {
    it("should return true for valid ABNs", function() {
        abns.forEach(function(abn) {
            expect(validatorObj.isValidABN(abn)).to.be.true;
        });

    });

    it("should return false for invalid ABNs", function() {
        invalidAbns.forEach(function(abn) {
            expect(validatorObj.isValidABN(abn)).to.not.be.true;
        });

    });

});

describe("ACN Validator", function() {
    it("should return true for valid ACNs", function() {
        acns.forEach(function(acn) {
            expect(validatorObj.isValidACN(acn)).to.be.true;
        });

    });

    it("should return false for invalid ACNs", function() {
        invalidAcns.forEach(function(acn) {
            expect(validatorObj.isValidACN(acn)).to.not.be.true;
        });

    });

});

describe("ACN/ABN combined Validator", function() {
    it("should return true for mix of valid ABNs or ACNs", function() {
        abnsAndAcns.forEach(function(abnOrAcn) {
            expect(validatorObj.isValidABNorACN(abnOrAcn)).to.be.true;
        });

    });

    it("should return false for mix of invalid ABNs or ACNs", function() {
        invalidAbnsOrAcns.forEach(function(abnOrAcn) {
            expect(validatorObj.isValidABNorACN(abnOrAcn)).to.not.be.true;
        });

    });
});

// Just to sure, let's switch the order and put ACN tests before ABN
describe("ACN/ABN combined Validator", function() {
    it("should return true for mix of valid ACNs or ABNs (ACNs go first this time)", function() {
        acnsAndAbns.forEach(function(abnOrAcn) {
            expect(validatorObj.isValidABNorACN(abnOrAcn)).to.be.true;
        });

    });
});

