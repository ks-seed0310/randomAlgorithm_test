class random1{
  #v1
  #v2
  #v3
  #v4
  constructor(){
    this.#v1=140737488355328n*BigInt(Date.now())+BigInt(crypto.getRandomValues(new Uint32Array(1))[0])
    this.#v2=this.#stir32b(Date.now())
    const c=crypto.getRandomValues(new Uint32Array(4))
    const ch=[...c].map(x=>x.toString(16).padStart(8,"0"))
    this.#v3=BigInt("0x"+ch.join(""))
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
      return v&0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFn
    }
    function cs(V,s){
      let v=t(V)
      return (v<<s)|(v>>(128n-s))
    }
    for (let i=0n;i<48n;i+=1n){
      re=t(re*c1)
      re=t(cs(re,i^8n)*19n+c1)
      re=t(re+c2)
      re=t(re*c2)
      re=t(re^c3)
      re=t(re*c4*c5*127n)
      re=t((16n*re+123987n+c1+c3)^c2)
      re=t(3n*(re*(i+1n)^c2)+c1)
      re=cs(re,13n)
    }
    re^=re>>48n
    re^=1511207693n
    re^=re>>32n
    re=re*0x85ebca6bn
    re^=re>>24n
    re=re*0xc2b2ae35n
    re^=re>>16n
    return t(re)
  }
  random1(){
    function t(v){
      return v&0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFn
    }
    function cs(V,s){
      let v=t(V)
      return t((v<<s)|(v>>(128n-s)))
    }
    let s1=this.#v1
    let s2=this.#v2
    let s3=this.#v3
    let s4=this.#v4
    this.#v1=t(s2+0x6444856E3F4EA63An^(s1>>17n)+s3*57n)
    s2^=s2<<23n
    this.#v2=t(s1^s2^s3^s4^(s1>>6n)^(s2>>12n)^(s3>>18n)^(s4>>24n))
    this.#v3=t((s1<<10n)^(BigInt(this.#v2)>>10n)^cs(s3^s4,13n)^(174440041n*s4))
    const _v1=this.#v1
    const _v2=this.#v2
    const _v3=this.#v3
    const _v4_s=cs((cs(_v1*s4,16n)^cs(_v2*_v3,12n)^cs(_v1*_v3,8n)^cs(_v2*s4,7n))*(((_v1+_v2+_v3+s4)*(_v1^_v2^_v3^s4))>>5n),11n)
    this.#v4=t((_v4_s^(_v4_s>>14n)^(_v4_s>>26n)^(_v4_s>>38n)^(256n^(_v4_s&0x0000000000157293n))))
    const _v4=this.#v4
    let g64=t(cs(((_v2+_v3)^_v4^_v1),34n)^(cs(_v2,17n)>>24n)^((_v1>>16n)^(_v2>>24n)^(_v3>>32n)^(_v4>>40n)>>10n)^t(cs(((_v1+_v2)*_v3)+_v4,46n)))
    g64^=(g64>>15n)
    g64^=((g64<<7n)&0x9d2c5680n)
    g64^=(t(_v1+_v2+_v3+_v4)>>8n)
    g64=cs(g64,22n)
    let g32=g64>>96n
    return Number(g32&0xFFFFFFFFn)
  }
}
