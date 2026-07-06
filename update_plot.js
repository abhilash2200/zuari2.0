const fs = require('fs');
let data = fs.readFileSync('plot-data.js', 'utf8');

data = data.replace(/,\s*facing:\s*"[^"]*"/g, '');
data = data.replace(/,\s*acing:\s*"[^"]*"/g, ''); // acing typo in original
data = data.replace(/,\s*plot_type:\s*"[^"]*"/g, '');
data = data.replace(/,\s*PLU_Rate_Sqft:\s*"[^"]*"/g, '');
data = data.replace(/,\s*is_booked:\s*(true|false)/g, '');

fs.writeFileSync('plot-data.js', data);
console.log('done');
