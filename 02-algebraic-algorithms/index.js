//Power
//Ждем ответа в слаке по power (Через степень двойки с домножением) (нужно перепроверить и доделать)
//Еще сделать через двоичное разложение показателя степени

//Fibo
//Тесты не проходят выяснить почему не прпавильные
// матрицу и decimal

const helpers = require('../helpers');
const fibo = require('./fibonacchi');
const power = require('./power');

const testFolder = './tests';

const testCategories = [
  {
    path: `${testFolder}/3.Power/`,
    disabled: false,
    condition: (input, output) => {
      //console.log('input', input);
      //console.log('output', output);

      const [n, p] = input.split('\r\n');
      //console.log(n, '   ', p);
      const x = power.powerTwoMultipy(n, p);
      //console.log('result', x, ' length ', x.length);
      //console.log('output', output, ' length ', output.length);
      console.log(`now: ${x}`, `must be: ${output}`);
      return x == output;
    }
  },
  {
    path: `${testFolder}/4.Fibo/`,
    disabled: false,
    condition: (input, output) => {
      //return tickets.countTickets(input) == output;
      const result = fibo.fibonacchiMatrix(+input);
      //console.log(output, result);
      return result == output;
    }
  }
];

(async () => {
  await testCategories.forEach(async ({ path, condition, disabled }) => {
    if (disabled) {
      return;
    }
    const getTests = await helpers.getTest(path, e => console.warn(e)); // Test[]
    getTests.forEach(t => {
      console.log('start - ', t.name);
      if (condition(t.in, t.out)) {
        console.log('\x1b[32m', path + t.name + ' - OK');
      } else {
        console.log('\x1b[31m', path + t.name + ' - FAILED');
      }
      console.log('end - ', t.name);
      console.log('\x1b[0m');
    });
  });
})();
