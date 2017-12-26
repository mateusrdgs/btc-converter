/* eslint-env mocha */

const chai = require('chai');
const dirtyChai = require('dirty-chai');

const { expect } = chai;
const { exec } = require('child_process');

const btcConverter = './src/main.js';

chai.use(dirtyChai);

describe('Main CLI', () => {
  it('should return Hello World!', (done) => {
    exec(btcConverter, (err, stddout, stderr) => {
      if (err) {
        throw err;
      }
      expect(stddout.replace('\n', '')).to.be.equal('Hello World!');
      done();
    });
  });
});
