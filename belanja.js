const readline = require('readline');
const { parseArgs } = require('util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`masukan total belanja (RP):`,(input) => {
    let totalbelanja = parseFloat(input);
    let diskon = 0;
    if (totalbelanja >= 250000) {
        diskon = totalbelanja * 0.10;
    }else if (totalbelanja >= 100000) {
        diskon = totalbelanja * 0.05;
    }else if (totalbelanja >= 50000) {
        diskon = totalbelanja * 0.03;
    }else {
        diskon = 0;
    }
     
    let totalbayar = totalbelanja - diskon;

    console.log(`Total belanja: RP ${totalbelanja}`);
    console.log(`Diskon: RP ${diskon}`);
    console.log(`Total bayar: RP ${totalbayar}`);
    rl.close();
});