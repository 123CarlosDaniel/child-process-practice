import fs from 'fs'
import cp from 'child_process'

const progs = {
    list : 'ls',
    copy : 'cp',
    folder : 'mkdir',
    remove : 'rm'
}

let err = fs.openSync('./logs/err.log','w')
let out = fs.openSync('./logs/out.log','w')

// let err = fs.createWriteStream('./err.log', {flags : 'a'})
// let out = fs.createWriteStream('./out.log', {flags : 'a'})
const child = cp.spawn(progs.list, ['-a'],{stdio : ['inherit', out, err ]})