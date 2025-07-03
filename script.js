// Table 1 raw data from the CSV file
const tableData = [
  { index: 'A1', value: 41 },
  { index: 'A2', value: 18 },
  { index: 'A3', value: 21 },
  { index: 'A4', value: 63 },
  { index: 'A5', value: 2 },
  { index: 'A6', value: 53 },
  { index: 'A7', value: 5 },
  { index: 'A8', value: 57 },
  { index: 'A9', value: 60 },
  { index: 'A10', value: 93 },
  { index: 'A11', value: 28 },
  { index: 'A12', value: 3 },
  { index: 'A13', value: 90 },
  { index: 'A14', value: 39 },
  { index: 'A15', value: 80 },
  { index: 'A16', value: 88 },
  { index: 'A17', value: 49 },
  { index: 'A18', value: 60 },
  { index: 'A19', value: 26 },
  { index: 'A20', value: 28 }
];

// Render Table 1
const table1Container = document.getElementById('table1-container');
const table1 = document.createElement('table');
table1.innerHTML = `
  <thead>
    <tr><th>Index #</th><th>Value</th></tr>
  </thead>
  <tbody>
    ${tableData.map(row => `<tr><td>${row.index}</td><td>${row.value}</td></tr>`).join('')}
  </tbody>
`;
table1Container.appendChild(table1);

// Get specific values
const getValue = (id) => tableData.find(row => row.index === id)?.value || 0;

// Table 2 calculations
const alpha = getValue('A5') + getValue('A20');
const beta = getValue('A15') / getValue('A7');
const charlie = getValue('A13') * getValue('A12');

// Populate Table 2 values
document.getElementById('alpha').textContent = alpha;
document.getElementById('beta').textContent = beta;
document.getElementById('charlie').textContent = charlie;
