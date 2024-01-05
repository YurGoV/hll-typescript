const readline = require('readline');
const { program } = require('commander');
require('colors');

const isInputValid = require('./utils/inputParamsValidator');
const isDataValid = require('./utils/dataValidator');
const convertNatively = require('./counter/native');
const convertTransit = require('./counter/transit');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

program.parse(process.argv);

const unitsData = require('./config/config.json');

const converter = () => {
  rl.question('Please enter input data OR Ctrl+C to quit\n'.green, (val) => {
    const validData = isInputValid(val);

    if (!validData) return converter();

    const { distance, convertTo } = validData;
    const { unit, value } = distance;

    if (!isDataValid({ unit, convertTo, unitsData })) return converter();

    const unitFromType = unitsData.units[unit];
    const unitToType = unitsData.units[convertTo];

    if (unitFromType !== unitToType) {
      const { transitKey, transitValue } = convertTransit({
        unitsData,
        unit,
        value,
      });
      const transitFromType = unitsData.units[transitKey];
      if (convertTo === transitKey) {
        const result = { unit: convertTo, value: transitValue.toFixed(2) };
        console.log(JSON.stringify(result).yellow);
      } else {
        const result = convertNatively({
          unitsData,
          unit: transitKey,
          value: transitValue,
          unitFromType: transitFromType,
          convertTo,
        });
        console.log(`${result}`.yellow);
      }
    }

    if (unitFromType === unitToType) {
      const result = convertNatively({
        unitsData,
        unit,
        value,
        unitFromType,
        convertTo,
      });
      console.log(`${result}`.yellow);
    }
    return converter();
  });
};

converter();
