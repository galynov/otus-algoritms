const helpers  = require('../helpers');

const testFolder = './tests';

const Big = require('big.js');

const math = require('mathjs')

const mathjs = math.create(math.all);

mathjs.config({
    number: 'BigNumber',
    precision: 64
})

function iterativePower(base, pow){
    let result = 1;
    for(let i = 0; i < pow; i++)
    {
        result = result * base;
    }
    return Number.parseFloat(result.toFixed(11));
}

function powerTwoMultipy(number, pow){
    if (pow == 0) {
        return 1;
    }
    const closestPow  = Math.floor(Math.log(pow)/Math.log(2));
    const resultPow = pow - (2 ** closestPow);

    result = xz(number, closestPow)

    console.log('result xz', result, 'closestPow', closestPow)
    for(i = 0; i < resultPow; i++) {
        result = result * number;
    }
    console.log(result)
    return Number.parseFloat(result.toFixed(11));
}


function xz(num, pow) {
    for(let i = 0; i < pow; i++)
    {
        n = num;
        num = n * n;
    }

    return num;
}

const jsPow = Math.pow(1.000001, 2**19).toFixed(13);
const hzPow = xz(1.000001,19);
console.log(jsPow);
console.log(hzPow);

return false;
/*
test 5 pow 19  1.000001

1.6892552271606 //php 
1.6892552271606 // c#
1.6892552271606 // js

1.689255224947

1.6892552271804
1.689255227180379

*/
powerTwoMultipy(1.00001, 100000);




const testCategories = [
    {
        path: `${testFolder}/3.Power/`,
        condition: (input, [output]) => {
            console.log('input', input)
            console.log('output', output)
            const [n,p] = input.split('\r\n');
            console.log(n,'   ', p)
            const x = powerTwoMultipy(n,p);
            console.log('result', x, ' length ', x.length)
            console.log('output', output, ' length ', output.length)
            return x == output;
        }
    },
    {
        path: `${testFolder}/4.Fibo/`,
        condition: (input, output) => {
            //return tickets.countTickets(input) == output;
            return null
        }
    }
];

(async () => {
    await testCategories.forEach(async ({path,condition}) => {
        const getTests = await helpers.getTest(path, (e) => console.warn(e)); // Test[]
        getTests.forEach((t) => {
                console.log("start - ", t.name);
                if(condition(t.in,t.out)){
                    console.log("\x1b[32m", path+t.name + ' - OK');
                } else {
                    console.log("\x1b[31m", path+t.name + ' - FAILED');
                }
                console.log("end - ", t.name);
                console.log("\x1b[0m");

        })
    })
})()
