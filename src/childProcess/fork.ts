import cp from 'child_process'

// Child process with child_process.fork()
const names = ['hola','hello','hi']
const child = cp.fork( 'hijo.ts', names, { cwd : './src/childProcess'})

child.on('message', (data) =>{
    console.log(`Parent received ${data}`)
})
child.on('error', ()=> {
    console.log('Error ocurred')
})
child.on('exit', ()=> {
    console.log('Child killed')
})

const interval = setInterval(()=> {
    child.send({ name :'pepito', age : 40, city : 'naples'})
}, 1000)

setTimeout(() => {
    clearInterval(interval)
    child.kill()
}, 5000);

