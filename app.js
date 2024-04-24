// const name='peter'

const os=require('os')
const user=os.userInfo()
// console.log(name)
console.log(user)
console.log(os.uptime())

const currentSys={
    name : os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()

}
console.log(currentSys)