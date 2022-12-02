const xlsx = require('xlsx')
const fs = require('fs')

const wb = xlsx.readFile(String(process.argv[2]))
const ws = wb.Sheets['Sheet1']
const data = xlsx.utils.sheet_to_json(ws)
const formatedData = {
  services: data,
}
const OUTPUT_DIR = './output';
const OUTPUT_FILE = OUTPUT_DIR + "/services.json";
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(formatedData, null, 2))
