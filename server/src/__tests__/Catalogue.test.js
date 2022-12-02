const data = require('../../scripts/output/services.json');
const { isJSON } = require('../utils');

test('check if th JSON output is generated', () => {
  expect(isJSON({ data })).toBe(false);
})
