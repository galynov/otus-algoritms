/* 2а. Итеративный (n умножений) */
function iterativePower(base, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result = result * base;
  }
  return Number.parseFloat(result.toFixed(11));
}

/* 2b. Через степень двойки с домножением */
function powerTwoMultipy(number, pow) {
  if (pow == 0) {
    return 1;
  }
  const closestPow = Math.floor(Math.log(pow) / Math.log(2));
  const resultPow = pow - 2 ** closestPow;

  result = costumePow(number, closestPow);

  for (i = 0; i < resultPow; i++) {
    result = result * number;
  }
  // console.log(result);
  return Number.parseFloat(result.toFixed(11));
}

function costumePow(num, pow) {
  for (let i = 0; i < pow; i++) {
    num *= num;
  }
  return num;
}

function powWithBinary(num, pow) {
  const binaryPow = parseInt(pow).toString(2);
  const binaryPowArray = binaryPow.split('').reverse();
  const binaryResult = binaryPowArray.map((el, i) => {
    return powerTwoMultipy(2, i);
  });
  let result = 1;
  binaryPowArray.forEach((el, i) => {
    if (+el) {
      result *= powerTwoMultipy(num, binaryResult[i]);
    }
  });
  return result;
}

const jsPow = 1.000001 ** (2 ** 19); // result 1.6892552271606103
const costumePowJs = costumePow(1.000001, 19); // result  1.689255227180379

module.exports.iterativePower = iterativePower;
module.exports.powerTwoMultipy = powerTwoMultipy;
module.exports.powWithBinary = powWithBinary;
