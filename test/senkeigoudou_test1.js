const a=2846271957n
const b=2543950117n
const m=4294967296n
let x=65536n
function senkei_next(){
  x=(a*x+b)%m
  return Number(x)
}
const CHUNK_SIZE=131072; 
const buf=Buffer.alloc(4);
function runLoop() {
    for (let i = 0; i < CHUNK_SIZE; i++) {
        buf.writeUInt32BE(senkei_next(), 0);
        process.stdout.write(buf);
    }
    setImmediate(runLoop);
}
runLoop();
process.on('SIGPIPE', () => process.exit(0));
