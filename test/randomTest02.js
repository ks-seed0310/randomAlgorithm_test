class random1{
  #v1
  #v2
  #v3
  #v4
  #gomi_data=[]
  constructor(){
    this.#v1=Date.now()>>>0
    this.#v2=this.#stir32b(Date.now())
    this.#v3=crypto.getRandomValues(new Uint32Array(1))[0]
    this.#v4=this.#stir32b(this.#v3)
  }
  #cs(v,s){
    return (v<<s)|(v>>>(32-s))
  }
  #stir32b(seed){
    const c1=0xcc9e2d51n;
    const c2=0x1b873593n;
    const c3=0xe6546b64n;
    const c4=0x411fb6fbn;
    const c5=0xa8cf0ce8n;
    let re=BigInt(seed);
    function t(v){
      return v&0xFFFFFFFFn
    }
    function cs(V,s){
      let v=t(V)
      return (v<<s)|(v>>(32n-s))
    }
    for (let i=0n;i<24n;i+=1n){
      re=t(re*c1)
      re=t(cs(re,i^8n)*19n+c1)
      re=t(re+c2)
      re=t(re*c2)
      re=t(re^c3)
      re=t((16n*re+123987n+c1+c3)^c2)
      re=t(3n*(re*(i+1n)^c2)+c1)
      re=cs(re,13n)
    }
    re^=1511207693n
    re^=re>>16n
    re=re*0x85ebca6bn
    re^=re>>13n
    re=re*0xc2b2ae35n
    re^=re>>16n
    return Number(t(re))
  }
  random1(){
    function t(v){
      return v&0xFFFFFFFFn
    }
    function cs(V,s){
      let v=t(V)
      return (v<<s)|(v>>(32n-s))
    }
    let s1=BigInt(this.#v1)
    let s2=BigInt(this.#v2)
    let s3=BigInt(this.#v3)
    let s4=BigInt(this.#v4)
    this.#v1=Number(t(s2+1986875077n))
    s2^=s2<<23n
    this.#v2=Number(t(s1^s2^s3^s4^(s1>>6n)^(s2>>12n)^(s3>>18n)^(s4>>24n)))
    this.#v3=Number(t((s1<<5n)^(BigInt(this.#v2)>>7n)^cs(s3^s4,13n))^(174440041n*s4))
    const _v1=BigInt(this.#v1)
    const _v2=BigInt(this.#v2)
    const _v3=BigInt(this.#v3)
    const _v4=BigInt(this.#v4)
    this.#v4=Number(t(cs((cs(_v1*_v4,16n)^cs(_v2*_v3,12n)^cs(_v1*_v3,8n)^cs(_v2*_v4,7n))*(((_v1+_v2+_v3+_v4)*(_v1^_v2^_v3^_v4))>>5n),11n)))
    let g32=t(cs((_v2+s3)^BigInt(this.#v4)^_v1^s3,17n))^cs(BigInt(this.#v2),17n)
    g32^=(g32>>15n)
    g32^=(g32<<7n)&0x9d2c5680n
    return Number(t(g32))
  }
}
const r = new random1();
const CHUNK_SIZE = 100000; 
function runLoop() {
    for (let i = 0; i < CHUNK_SIZE; i++) {
        console.log(r.random1());
    }
    setImmediate(runLoop);
}
runLoop();
process.on('SIGPIPE', () => process.exit(0));
