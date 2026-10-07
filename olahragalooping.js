const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tanyakanOlahraga() {
  rl.question(`\nmasukan jenis olahraga (lari/push up/flank) atau "keluar": `, (olahraga) => {
    let jenisolahraga = olahraga.toLowerCase().trim();

    if (jenisolahraga === "keluar") {
      console.log("Terima kasih telah menggunakan program ini.");
      rl.close(); 
    } else {
      rl.question(`masukan durasi olahraga (menit): `, (input) => {
        let durasi = parseFloat(input);
        let totalkalori = 0;

        switch (jenisolahraga) {
          case 'lari':
            totalkalori = (60 / 5) * durasi;
            break;
          case 'push up':
            totalkalori = (200 / 30) * durasi;
            break;
          case 'flank':
            totalkalori = 5 * durasi;
            break;
          default:
            console.log(`Jenis olahraga tidak valid.`);
            tanyakanOlahraga(); 
            return;
        }

        console.log(`\n--- Hasil ---`);
        console.log(`Jenis olahraga: ${jenisolahraga}`);
        console.log(`Durasi: ${durasi} menit`);
        console.log(`Total kalori terbakar: ${totalkalori.toFixed(1)} kalori`);

        tanyakanOlahraga();
      });
    }
  });
}

tanyakanOlahraga();
