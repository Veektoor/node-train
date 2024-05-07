const sqlite3= require('sqlite3').verbose()
let sql

//connct to DB
const db=new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err)=>{
    if (err) return console.error(err.message)

})

//create DB
sql=`CREATE TABLE users(id INTERGER PRIMARY KEY, first_name, last_name, username, password, email)`
db.run(sql)
return db;

