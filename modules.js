const {readFileSync, writeFileSync}= require('fs')

const first=readFileSync('./text.txt','utf8')
const second=readFileSync('./text2.txt','utf8')

console.log(first, second)

writeFileSync('./result.txt',`It works :${first}, ${second}`,{flag:'a'})