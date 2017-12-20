const fs = require("fs")
const wasm = "./public/hello.wasm"
const buffer = fs.readFileSync(wasm)

// const lib = Wasm.instantiateModule(toUint8Array(buf)).exports;
const w = WebAssembly.compile(buffer)
  .then( module => {
    const instance = WebAssembly.Instance(module, {})
    console.log(instance.exports.add(2,3))
  })
