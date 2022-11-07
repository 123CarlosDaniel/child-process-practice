import cp from 'child_process'

// child_process.execFile(file,[args],{},callback)

// const child = cp.execFile('ls', ['-a','-l'], (error,out,err)=>{
//     if (error) {
//         throw error
//     } else {
//         console.log(out)
//     }
// })

const child = cp.execFile('g++', ['-o','hello.exe','hello.cpp'], {cwd : './src/childProcess'},(error, out ,err)=>{
    if (error) {
        throw error
    } else {
        const runner = cp.execFile('./hello.exe',['hola mundo execFile cpp'],{cwd : './src/childProcess'} , (error,out,err)=>{
            if (error) {
                throw error
            } else {
                console.log(out)
            }
        })
    }
})