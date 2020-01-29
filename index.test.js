const {toQIF} = require('.');

describe('toQIF', () => {
  it('should create qif', () => {
    const trans = require('./index.test.json');
    const qif = toQIF(trans);
    expect(qif).toMatchSnapshot();
  });
});
