console.log(__filename)
console.log(__dirname)

const os=require('os')

tm=os.totalmem()
fm=os.freemem()

console.log(`total memory=${tm}`)
console.log(`free memory=${fm}`)