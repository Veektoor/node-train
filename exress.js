const express =require('express')
const app=express()
const path= require('path')
const ejs=require('ejs')


app.set('view engine','ejs')

app.listen(8000,()=>{

    console.log("listening on port 8000")
})

// app.get('/',(req, res)=>{
//     // res.join({
//     //     name:"don Carlos"
//     // })
//     app.use(express.static('public'))
//     res.sendFile(path.resolve(__dirname,"index.html"))
// })

//using Embedded javascript(ejs)
app.get('/',(req,res)=>{
    res.render('index')
})