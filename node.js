const fs = require("fs")
const wasm = "./public/hello.wasm"

const buf = fs.readFileSync(wasm)

const lib = Wasm.instantiateModule(toUint8Array(buf)).exports;

console.log(lib)
