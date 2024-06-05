import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelToTextConverter = () => {
  const [textData, setTextData] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryData = event.target.result;
      const workbook = XLSX.read(binaryData, { type: 'binary' });

      // Assuming only one sheet in the Excel file
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert sheet to array of arrays
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Remove headers if they exist
      if (sheetData.length > 0 && Array.isArray(sheetData[0])) {
        sheetData.shift();
      }

      // Convert the data to text
      const textResult = sheetData.map(row => row.join('|')).join('\n');
      setTextData(textResult);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <div>
        <h2>Converted Text:</h2>
        <textarea value={textData} rows={10} cols={50} readOnly />
      </div>
    </div>
  );
};

export default ExcelToTextConverter;
