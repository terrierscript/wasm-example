// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

const { load } = require("assemblyscript-loader")


fetch('./bin.wasm')
  .then(result => result.arrayBuffer())
  .then( buf => load(buf) )
  .then( module => {
    const ex = module.exports
    console.log(ex)

    const result = ex.echo(3)
    ex.ping()
    console.log(ex.fib(1))
    document.querySelector("body").innerHTML = result
  }).catch(e => {
    console.warn(e)
  })
