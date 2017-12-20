const { load } = require("assemblyscript-loader")

load('./hello.wasm')
  .then( module => {
    console.log(module)
    const ex = r.instance.exports
    const result = ex.echo("foo")
    document.querySelector("body").innerHTML = result
  })
