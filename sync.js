const {readFile, writeFile}=require('fs')
// const fisrt=result;
readFile('./text.txt', 'utf8',(err, result)=>{
    if (err){
        console.log(err)
        return
        console.log(result)
    }
const second=result;
// writeFile('./text2.txt','utf8',(err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }

// })
})