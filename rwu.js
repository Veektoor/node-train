
const express = require('express');
const fs = require('fs');
const path = require('path')
var http = require('http');
const formidable = require('formidable');
 
const app = express();
 
http.createServer(function (req, res) {
    if (req.url == '/upload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
 
        let oldPath = files.profilePic.filepath;
        let newPath = path.join(__dirname, '/home/don/Documents/node')
        let rawData = fs.readFileSync(oldPath)
 
        fs.writeFile(newPath, rawData, function (err) {
            if (err) console.log(err)
            return res.send("Successfully uploaded")
        })
    })
} else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);
