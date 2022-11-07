
const args = process.argv.slice(2)

function sayHello(names : Array<string>) {
  names.forEach((name : string) => {
    // @ts-ignore:next-line
    process.send(`Greetings ${name}`)
  });
}
// console.log(args)
sayHello(args)

process.on('message', (userData) => {
  console.dir(userData, {colors : true})
})