const fs = require('fs');
const readableStream = fs.createReadStream('./stream/input.txt', {
    highWaterMark:15
});
const writableStream = fs.createWriteStream('./stream/output.txt');
readableStream.on('readable', () => {
    process.stdout.write(`[${readableStream.read()}]`);
    writableStream.write(`${readableStream.read()}\n`)
});
readableStream.on('end', () => {
     writableStream.end('')
});