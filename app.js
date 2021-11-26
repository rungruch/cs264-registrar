
const express = require('express')
var multer = require('multer')
const http = require('http')
const fs = require('fs')
const os = require("os")
const path = require('path')

// express() เป็นฟังค์ชั่น และ assign ไว้ที่ตัวแปร app
const app = express()


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './siguploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

//app.use(express.static(__dirname + '/sigupload'));
app.use('/siguploads', express.static('siguploads'));

app.post('/sig-upload-single', upload.single('sig-file'), function (req, res, next) {
 //  req.file is the `profile-file` file
   //req.body will hold the text fields, if there were any
  console.log(JSON.stringify(req.file))
  var response = '<a href="/student-main">หน้าแรก</a><br>'
  response += "Files uploaded successfully.<br>"
  response += `<img src="${req.file.path}" /><br>`
  return res.send(response)
})



//  app เป็น object และมี function ชื่อเดียวกับ HTTP Method
// ตัวอย่างคือ `.get()` เหมือนกับ GET


const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/login.html')
  })


  app.get('/studentjs', function (req, res) {
    res.sendFile(__dirname + '/js/student_controller.js')
  })

  app.get('/searchjs', function (req, res) {
    res.sendFile(__dirname + '/js/search.js')
  })
  app.get('/getreg_subject', function (req, res) {
    res.sendFile(__dirname + '/res/reg_subject.json')
  })

  app.get('/getsubject_table', function (req, res) {
    res.sendFile(__dirname + '/res/student_subject.json')
  })
  app.get('/student-main', function (req, res) {
    res.sendFile(__dirname + '/html/student-main.html')
  })

  app.get('/class_table', function (req, res) {
    res.sendFile(__dirname + '/html/class_table.html')
  })

  app.get('/logintemp', function (req, res) {
    res.sendFile(__dirname + '/html/login.html')
  })


  app.get('/edit_class_table', function (req, res) {
    res.sendFile(__dirname + '/html/edit_class_table.html')
  })

  app.get('/formjs', function (req, res) {
    res.sendFile(__dirname + '/js/controller.js')
  })

  app.get('/testformjs', function (req, res) {
    res.sendFile(__dirname + '/js/controller1.js')
  })


  
  app.get('/fillform', function (req, res) {
    res.sendFile(__dirname + '/html/forminput.html')
  })

  app.get('/teacherjs', function (req, res) {
    res.sendFile(__dirname + '/js/teacher_controller.js')
  })
  app.get('/searchform', function (req, res) {
    res.sendFile(__dirname + '/html/searchform.html')
  })
 

  app.get('/uploadpage', function (req, res) {
    res.sendFile(__dirname + '/html/upload.html')
  })

  app.get('/status', function (req, res) {
    res.sendFile(__dirname + '/html/status.html')
  })

  
  app.get('/getform', function (req, res) {
    res.sendFile(__dirname + '/res/studentformrequested.json')
  })


  app.get('/searchformprint', function (req, res) {
    res.sendFile(__dirname + '/html/searchformprint.html')
  })

  app.get('/printform', function (req, res) {
    res.sendFile(__dirname + '/html/formprint.html')
  })
  app.get('/printformjs', function (req, res) {
    res.sendFile(__dirname + '/js/printform.js')
  })

  app.get('/approveformjs', function (req, res) {
    res.sendFile(__dirname + '/js/approveform.js')
  })

  app.get('/formapprove', function (req, res) {
    res.sendFile(__dirname + '/html/formapprove.html')
  })

  app.get('/searchformadmin', function (req, res) {
    res.sendFile(__dirname + '/html/searchformadmin.html')
  })

  app.get('/adminformapprove', function (req, res) {
    res.sendFile(__dirname + '/html/adminformapprove.html')
  })
  app.use('/img', express.static(__dirname + '/picture_resources'));


  
  app.use('/html', express.static(__dirname + '/html'));


  
app.post('/saveStudent', (req, res) => {
  var url = '';
  var index = req.url.indexOf('?');
  var path;
  if (index != -1){
    path = req.url.substring(0,index);
    
  }else{
    path = req.url;
  }
  console.log('path: '+path);
  switch(path){
    case '/saveStudent':
      req.on('data',chunk =>{
        let json = JSON.parse(chunk);

        let outputJSON = [];
        let data = fs.readFileSync(__dirname +'/res/student_subject.json',{encoding:'utf8',flag:'r'});
        outputJSON=JSON.parse(data);
        outputJSON.push(json);
        outputJSON=JSON.stringify(outputJSON);
        fs.writeFileSync(__dirname +'/res/student_subject.json',outputJSON)
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('OK');
        res.end();
        
      });
      break;




  }
})


app.post('/saveStudentform', (req, res) => {
  var url = '';
  var index = req.url.indexOf('?');
  var path;
  if (index != -1){
    path = req.url.substring(0,index);
    
  }else{
    path = req.url;
  }
  console.log('path: '+path);
  switch(path){
    case '/saveStudentform':
      req.on('data',chunk =>{
        let json = JSON.parse(chunk);
        let outputJSON = [];
        let data = fs.readFileSync('res/studentformrequested.json',{encoding:'utf8',flag:'r'});
        outputJSON=JSON.parse(data);
        outputJSON.push(json);
        outputJSON=JSON.stringify(outputJSON);
        fs.writeFileSync('res/studentformrequested.json',outputJSON,'utf8')
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('OK');
        res.end();
      })
  break;
  }
})



app.post('/saveStudentformapprove', (req, res) => {
  var url = '';
  var index = req.url.indexOf('?');
  var path;
  if (index != -1){
    path = req.url.substring(0,index);
    
  }else{
    path = req.url;
  }
  console.log('path: '+path);
  switch(path){
    case '/saveStudentformapprove':
      req.on('data',chunk =>{
        //let json = JSON.parse(chunk);
        //let outputJSON = [] ;
       // let data = fs.readFileSync('res/studentformrequested.json',{encoding:'utf8',flag:'r'});
        //outputJSON=JSON.parse(data);
        //outputJSON.push(json);
        //outputJSON=JSON.stringify(outputJSON);
        fs.writeFileSync('res/studentformrequested.json',chunk,'utf8')
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('OK');
        res.end();
      })
  break;
  }
})



  const server = http.createServer((req, res) => {
    const handler = (req, res) => {
        res.end(`
          <div>
            <h2 style="color: #ff3456;">Ahoy!</h2>
            <p style="color: #23dd55;">This is node.js tutorial</p>
          </div>
        `)
      }
      const server = http.createServer(handler)
  })



// 4. listen() เป็น function คล้ายๆ http module เพื่อเอาไว้ระบุว่า server จะรัน ด้วย port อะไร
app.listen(3000)