const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membuka berkas!');
        return;
    }
    console.log(data);
}

const filepath = path.resolve('./filesystem', 'notes.txt');
fs.readFile(filepath, 'UTF-8', fileReadCallback);