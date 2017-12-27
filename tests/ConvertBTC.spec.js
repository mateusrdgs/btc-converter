/* eslint-env mocha */

const chai = require('chai');
const dirtyChai = require('dirty-chai');

const convertBTC = require('../src/ConvertBTC');

const { expect } = chai;

chai.use(dirtyChai);

describe('ConvertBTC', () => {
  it('should return USD as currency an 1 as amount as default', () => {
    expect(convertBTC()).to.be.equal('1 BTC to USD = 2000.00');
  });
  it('should return BRL as currency an 10 as amount when defined', () => {
    expect(convertBTC('BRL', 10)).to.be.equal('10 BTC to BRL = 2000.00');
  });
});
