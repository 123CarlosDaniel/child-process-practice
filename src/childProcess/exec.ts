import cp from 'child_process'

const progs = {
    list : 'ls',
    copy : 'cp',
    folder : 'mkdir',
    remove : 'rm'
}

// cp.exe(command, {options}, cb)

const child = cp.exec(progs.remove + " -r css", (err,stdout, stderr)=> {
    if (err) {
        console.log('error ',err.code)
        console.log('error ',err.message)
    } else{
        console.log(stdout)
    }
})

child.stdout?.on('data', (chunk)=> {
  console.log('hola mundoooo')
})

child.stderr?.on('data', (chunk)=> {
  console.log(chunk, 'ho')
})