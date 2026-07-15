const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

function readExcel(fileName = 'employees.xlsx', sheetName = 'Employees') {
  const possiblePaths = [path.resolve(__dirname, '..', 'test data', fileName)];

  const filePath = possiblePaths.find((candidate) => fs.existsSync(candidate));
  if (!filePath) {
    throw new Error(`Excel file not found. Checked: ${possiblePaths.join(', ')}`);
  }
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error(`Sheet not found: ${sheetName}`);
  }
   return XLSX.utils.sheet_to_json(worksheet, { defval: '' });
}
module.exports = {
  readExcel,
};
