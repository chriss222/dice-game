let result = 0;

const defaultState = {
  above: true,
  value: 50,
  result: null,
  balance: 200,
  betAmount: 10,
  gameError: false,
};

const rollRiggedDice = () => {
  let newRoll;
  let isDuplicate;

  do {
    if (above) {
      newRoll = (Math.random() * (100 - value) + Number(value)).toFixed(2);
    } else {
      newRoll = (Math.random() * value).toFixed(2);
    }
    isDuplicate = newRoll === result?.toFixed(2);
  } while (isDuplicate);

  result = parseFloat(newRoll);
  return result;
};

const rollRandomDice = () => {
  let newRoll;
  let isDuplicate;

  do {
    newRoll = (Math.random() * 100).toFixed(2);
    isDuplicate = newRoll === result?.toFixed(2);
  } while (isDuplicate);

  result = parseFloat(newRoll);
  return result;
};

export { defaultState, rollRandomDice, rollRiggedDice };
