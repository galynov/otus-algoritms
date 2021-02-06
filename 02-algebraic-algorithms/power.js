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

  console.log('result xz', result, 'closestPow', closestPow);
  for (i = 0; i < resultPow; i++) {
    result = result * number;
  }
  console.log(result);
  return Number.parseFloat(result.toFixed(11));
}

function costumePow(num, pow) {
  for (let i = 0; i < pow; i++) {
    num *= num;
  }
  return num;
}

const jsPow = 1.000001 ** (2 ** 19); // result 1.6892552271606103
const costumePowJs = costumePow(1.000001, 19); // result  1.689255227180379

//console.log(jsPow);
//console.log(costumePowJs);
//return false;
/*
test 5 pow 19  1.000001

1.6892552271606 //php 
1.6892552271606 // c#
1.6892552271606 // js

1.689255224947

1.6892552271804
1.689255227180379

*/
//powerTwoMultipy(1.00001, 100000);

//return false;
