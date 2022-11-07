import cp from 'child_process'

// child_process.spawn(command,[args],{options}) 
// const child  = cp.spawn(progs.folder, ["css"])

const child = cp.spawn('ls',['-a','css'])

child.stdout.on('data', (data : Buffer)=> {
  console.log(data.toString())
})

child.stderr.on('data', (err : Buffer)=> {
  console.log(err.toString())
})