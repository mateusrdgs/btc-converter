/* eslint-env mocha */

const chai = require('chai');
const dirtyChai = require('dirty-chai');

const { expect } = chai;
const { exec } = require('child_process');
const pkg = require('../package.json');

const btcConverter = './src/main.js';

chai.use(dirtyChai);

describe('Main CLI', () => {
  it('should return the current program version', (done) => {
    exec(`${btcConverter} --version `, (err, stddout) => {
      if (err) {
        throw err;
      }
      expect(stddout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });
  it('should return the description when btn-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) {
        throw err;
      }
      expect(stdout.includes('Convert Bitcoin to any currency defined')).to.be.true();
      done();
    });
  });
  it('should return the currency when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) {
        throw err;
      }
      expect(stdout.includes('--currency')).to.be.true();
      done();
    });
  });
  it('should return the amount when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) {
        throw err;
      }
      expect(stdout.includes('--amount')).to.be.true();
      done();
    });
  });
});
