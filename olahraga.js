const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
    //function tanyakanolahraga(statement coding) {
    rl.question(`masukan jenis olahraga(lari/push up/flank):`,(olahraga) => {
    let jenisolahraga = olahraga.toLowerCase().trim();
            rl.question(`masukan durasi olahraga (menit):`,(input) => {
                let durasi = parseFloat(input);
                let totalkalori = 0;
    
        switch (jenisolahraga) {
            case 'lari':
                totalkalori = (60/5) * durasi;
                break;

            case 'push up':
                totalkalori = (200/30) * durasi;
                break;

            case 'flank':
                totalkalori = 5 * durasi;
                break;

            default:
                console.log(`Jenis olahraga tidak valid.`);
                rl.close();
                return;
        }
        console.log(`Jenis olahraga: ${jenisolahraga}`);
        console.log(`Durasi: ${durasi} menit`);
        console.log(`Total kalori terbakar: ${totalkalori} kalori`);
        rl.close();
    });
    });
