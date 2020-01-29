const HEADER = '!Type:Bank\n';

const addDate = ({transactionTime: dt}) => {
  return `D${dt.substr(0, 4)}/${dt.substr(5, 2)}/${dt.substr(8, 2)}\n`;
};

const addAmount = ({direction, amount: {minorUnits}}) => {
  const operator = direction == 'IN' ? '' : '-';
  return `T${operator}${(minorUnits / 100).toFixed(2)}\n`;
};

const addPayee = ({counterPartyName}) => {
  return `P${counterPartyName}\n`;
};

const removeSpaces = (s = '') => {
  return s.replace(/ +(?= )/g, '');
};

const addMemo = ({reference}) => {
  return `M${removeSpaces(reference)}\n`;
};

const endRecord = () => {
  return '^\n';
};

const reducer = (qif, transaction) => {
  qif += addDate(transaction);
  qif += addAmount(transaction);
  qif += addPayee(transaction);
  qif += addMemo(transaction);
  qif += endRecord(transaction);
  return qif;
};

const toQIF = transactions => {
  return transactions.reduce(reducer, HEADER);
};

module.exports = {
  toQIF,
};
