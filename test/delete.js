'use strict';

// tests for delete
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('delete', '/handler.js', 'delete');


xdescribe('if id is not present', () => {
  before((done) => {
    done();
  });
   let pathParameters = {
   "id":"634003a3f7de404336235d60"
  }
    it('deleting the data', () => {
    return wrapped.run({
      pathParameters
    }).then(result => {
      expect(result).to.not.be.empty;
      expect(result).to.be.instanceof(Object);
      expect(result).to.have.property('statusCode', 500);
    })
})   
});
  
xdescribe('delete', () => {
  before((done) => {
    done();
  });
   let pathParameters = {
   "id":"634003a3f7de404336235d60"
  }

    return wrapped.run({
      pathParameters
    }).then(result => {
      expect(result).to.not.be.empty;
      expect(result).to.be.instanceof(Object);
      expect(result).to.have.property('statusCode', 200);
      expect(result).to.have.property('body');
      expect(result.body).not.to.be.empty;
    })
});
  
describe('delete without passing id', () => {
  before((done) => {
    done();
  });
   let pathParameters = {
  }

    return wrapped.run({
      pathParameters
    }).then(result => {
        console.log(result);
      expect(result).to.not.be.empty;
      expect(result).to.be.instanceof(Object);
      expect(result).to.have.property('statusCode', 500);
    })
});