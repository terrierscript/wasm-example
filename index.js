
fetch('./public/hello.wasm')
  .then(response => response.arrayBuffer())
  .then(bytes => {
    return WebAssembly.instantiate(bytes, {})
  })
  .then( r => {
    const ex = r.instance.exports
    const result = ex.add(2, 3)
    document.querySelector("body").innerHTML = result
  })
