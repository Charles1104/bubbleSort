/*jshint esversion: 6 */

const chai = require ('chai');
const expect = chai.expect;
const app = require('../app.js');

describe("app", function() {

  it('should be a function', function () {
    expect(app).to.exist;
    expect(app).to.be.an('function');
  });

  it  ('should return an object', function (){
    expect(app()).to.be.an('object');
  });

});

describe('Data Type', function () {
  it('Only arrays can be entered', function () {
    expect(app().bubbleSort.bind(null,"test")).to.throw(Error);
    expect(app().bubbleSort.bind(null,8)).to.throw(Error);
    expect(app().quickSort.bind(null,"test")).to.throw(Error);
    expect(app().quickSort.bind(null,8)).to.throw(Error);
  });
});

describe('BubbleSort Methods', function () {

  beforeEach(function () {
    newSort = app();
  });

  it('bubbleSort should be a function', function () {
    expect(newSort.bubbleSort).to.be.a('function');
    expect(global.bubbleSort).to.be.undefined;
  });

  it('should sort accurately an array', function () {
      expect(newSort.bubbleSort([3,2,5,2,1,8,9,14,5,4,3,2,-5,-4,0,1])).to.be.a('array');
      expect(newSort.bubbleSort([3,2,5,2,1,8,9,14,5,4,3,2,-5,-4,0,1])).to.deep.equal([-5, -4, 0, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 8, 9, 14]);
      expect(newSort.bubbleSort([0,1,2,2])).to.deep.equal([0,1,2,2]);
      expect(newSort.bubbleSort([25,12,8,34,34,22,23,87,80,65,19,-2])).to.deep.equal([-2, 8, 12, 19, 22, 23, 25, 34, 34, 65, 80, 87]);
    });

});

describe('quickSort Methods', function () {

  beforeEach(function () {
    newSort = app();
  });

  it('quickSort should be a function', function () {
    expect(newSort.quickSort).to.be.a('function');
    expect(global.quickSort).to.be.undefined;
  });

  it('should sort accurately an array', function () {
      expect(newSort.quickSort([3,2,5,2,1,8,9,14,5,4,3,2,-5,-4,0,1])).to.be.a('array');
      expect(newSort.quickSort([3,7,8,4,2,1,5])).to.deep.equal([1,2,3,4,5,7,8]);
      expect(newSort.quickSort([0,1,2,2])).to.deep.equal([0,1,2,2]);
      expect(newSort.quickSort([25,12,8,34,34,22,23,87,80,65,19,-2])).to.deep.equal([-2, 8, 12, 19, 22, 23, 25, 34, 34, 65, 80, 87]);
    });

});

describe('mergeSort Methods', function () {

  beforeEach(function () {
    newSort = app();
  });

  it('quickSort should be a function', function () {
    expect(newSort.mergeSort).to.be.a('function');
    expect(global.mergeSort).to.be.undefined;
  });

  it('should sort accurately an array', function () {
      expect(newSort.mergeSort([3,2,5,2,1,8,9,14,5,4,3,2,-5,-4,0,1])).to.be.a('array');
      expect(newSort.mergeSort([3,7,8,4,2,1,5])).to.deep.equal([1,2,3,4,5,7,8]);
      expect(newSort.mergeSort([0,1,2,2])).to.deep.equal([0,1,2,2]);
      expect(newSort.mergeSort([25,12,8,34,34,22,23,87,80,65,19,-2])).to.deep.equal([-2, 8, 12, 19, 22, 23, 25, 34, 34, 65, 80, 87]);
    });

});