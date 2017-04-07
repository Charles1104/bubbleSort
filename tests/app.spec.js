/*jshint esversion: 6 */

const chai = require ('chai');
const expect = chai.expect;

const bubble = require('../bubbleSort.js');
const quick = require('../quickSort.js');
const merge = require('../mergeSort.js');
const insertion = require('../insertionSort.js');
const selection = require('../selectionSort.js');

describe("bubbleSort, quickSort, mergeSort, insertionSort, selectionSort", function() {

  it('should be a function', function () {
    expect(bubble).to.exist;
    expect(bubble).to.be.an('function');
    expect(quick).to.exist;
    expect(quick).to.be.an('function');
    expect(merge).to.exist;
    expect(merge).to.be.an('function');
    expect(insertion).to.exist;
    expect(insertion).to.be.an('function');
    expect(selection).to.exist;
    expect(selection).to.be.an('function');
  });

  it  ('should return an object', function (){
    expect(bubble()).to.be.an('object');
    expect(quick()).to.be.an('object');
    expect(merge()).to.be.an('object');
    expect(insertion()).to.be.an('object');
    expect(selection()).to.be.an('object');
  });

});

describe('Data Type', function () {
  it('Only arrays can be entered', function () {
    expect(bubble().bubbleSort.bind(null,"test")).to.throw(Error);
    expect(bubble().bubbleSort.bind(null,8)).to.throw(Error);
    expect(quick().quickSort.bind(null,"test")).to.throw(Error);
    expect(quick().quickSort.bind(null,8)).to.throw(Error);
    expect(merge().mergeSort.bind(null,"test")).to.throw(Error);
    expect(merge().mergeSort.bind(null,8)).to.throw(Error);
    expect(insertion().insertionSort.bind(null,"test")).to.throw(Error);
    expect(insertion().insertionSort.bind(null,8)).to.throw(Error);
    expect(selection().selectionSort.bind(null,"test")).to.throw(Error);
    expect(selection().selectionSort.bind(null,8)).to.throw(Error);
  });
});

describe('BubbleSort Methods', function () {

  beforeEach(function () {
    newSort = bubble();
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
    newSort = quick();
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
    newSort = merge();
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

describe('insertionSort Methods', function () {

  beforeEach(function () {
    newSort = insertion();
  });

  it('insertionSort should be a function', function () {
    expect(newSort.insertionSort).to.be.a('function');
    expect(global.insertionSort).to.be.undefined;
  });

  it('should sort accurately an array', function () {
      expect(newSort.insertionSort([3,2,5,2,1,8,9,14,5,4,3,2,-5,-4,0,1])).to.be.a('array');
      expect(newSort.insertionSort([3,7,8,4,2,1,5])).to.deep.equal([1,2,3,4,5,7,8]);
      expect(newSort.insertionSort([0,1,2,2])).to.deep.equal([0,1,2,2]);
      expect(newSort.insertionSort([25,12,8,34,34,22,23,87,80,65,19,-2])).to.deep.equal([-2, 8, 12, 19, 22, 23, 25, 34, 34, 65, 80, 87]);
    });

});


describe('selectionSort Methods', function () {

  beforeEach(function () {
    newSort = selection();
  });

  it('selectionSort should be a function', function () {
    expect(newSort.selectionSort).to.be.a('function');
    expect(global.selectionSort).to.be.undefined;
  });

  it('should sort accurately an array', function () {
      expect(newSort.selectionSort([3,2,5,2,1,8,9,14,5,4,3,2,-5,-4,0,1])).to.be.a('array');
      expect(newSort.selectionSort([3,7,8,4,2,1,5])).to.deep.equal([1,2,3,4,5,7,8]);
      expect(newSort.selectionSort([0,1,2,2])).to.deep.equal([0,1,2,2]);
      expect(newSort.selectionSort([25,12,8,34,34,22,23,87,80,65,19,-2])).to.deep.equal([-2, 8, 12, 19, 22, 23, 25, 34, 34, 65, 80, 87]);
    });

});