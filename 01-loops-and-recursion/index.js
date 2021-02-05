
const helpers  = require('../helpers');

const tickets  = require('./tickets');

const testFolder = './tests';

const testCategories = [
    {
        path: `${testFolder}/0.String/`,
        condition: (input, output) => {
            return input.replace('\r\n','').length == +output;
        }
    },
    {
        path: `${testFolder}/1.Tickets/`,
        condition: (input, output) => {
            return tickets.countTickets(+input) == +output;
        }
    }
];


(async () => {
    await testCategories.forEach(async ({path, condition}) => {
        const getTests = await helpers.getTest(path, (e) => console.warn(e)); // Test[]
        getTests.forEach((t) => {
            if(condition(t.in,t.out)){
                console.log("\x1b[32m", path+t.name + ' - OK');
            } else {
                console.log("\x1b[31m", path+t.name + ' - FAILED');
            }
        })
    })
})();

