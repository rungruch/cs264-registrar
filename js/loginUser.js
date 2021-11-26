function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
   var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
       results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function login() {
    const username = document.getElementById("Username").value;
    const password = document.getElementById("passwordU").value;
      
  
  const xhttp = new XMLHttpRequest();
  
  var studentSignin = /^[0-9.!#$%&'*+/=?^_`{|}~-]/;
  var StaffSignin = /^[a-zA-Z.!#$%&'*+/=?^_`{|}~-]/;
  
  //studentLogin
  if (username.match(studentSignin)) {
    xhttp.onload = function(){
  
        let sData = this.responseText;
  
        try{
            var count = 0;
            let studentLogin = JSON.parse(sData);
  
            for (i in studentLogin) {
            //valid Login
            if (username == studentLogin[i].Username && password == studentLogin[i].Password) {
              console.log("logged in " + studentLogin[i].Username);
  
              //send studentID to sessionStorage
              sessionStorage.setItem('StudentID' , studentLogin[i].Username);
  
              Swal.fire({
                background: 'rgba(245, 242, 245, 0.95)',
                icon: 'success',
                title: 'เข้าสู่ระบบสำเร็จ',
                confirmButtonText: 'ตกลง',
              }).then((result) => {
              if (result.isConfirmed) {   
                  //Go to student-main.html?id="StudentID"
                  window.location.replace ("/html/student-main.html?id="+sessionStorage.getItem("StudentID"));
                } 
              })
              count++;
            } 
           }
  
           //Login fail
          if (count == 0) { 
            Swal.fire({
              background: 'rgba(245, 242, 245, 0.95)',
              icon: 'error',
              title: 'เข้าสู่ระบบไม่สำเร็จ',
              text: 'รหัสผ่านไม่ถูกต้อง',
              confirmButtonText: 'ตกลง',
            })
          }
          
        }catch(err){
          console.log("Not Found");
        }
  
    }
    xhttp.open("GET", "/studentLogin");
    xhttp.send();
  
  //@staff.tu.ac.th or Teacher Name
  //teacherLogin
  } else if (username.match(StaffSignin)) { 
      xhttp.onload = function(){
    
          let tData = this.responseText;
    
          try{
              var count =0;
              let teacherLogin = JSON.parse(tData);
    
              for (i in teacherLogin) {
              //valid Login
              if (username == teacherLogin[i].Username && password == teacherLogin[i].Password) {
                console.log("logged in " + teacherLogin[i].Name);
  
                //send TeacherID to sessionStorage TeacherID = teacher or admin
                sessionStorage.setItem('status' ,teacherLogin[i].ID);
                sessionStorage.setItem('TeacherName' ,teacherLogin[i].Name);
  
                  Swal.fire({
                    background: 'rgba(245, 242, 245, 0.95)',
                    icon: 'success',
                    title: 'ยินดีต้อนรับคุณ'+'\n'+sessionStorage.getItem("TeacherName"),
                    confirmButtonText: 'ตกลง',
              }).then((result) => {
              if (result.isConfirmed) {   
                window.location.replace ("/html/teacher-main.html?id="+sessionStorage.getItem("status")) ;
                } 
              })
                count++;
              } 
             }
    
             //Login fail
            if (count == 0) {
              Swal.fire({
                background: 'rgba(245, 242, 245, 0.95)',
                icon: 'error',
                title: 'เข้าสู่ระบบไม่สำเร็จ',
                text: 'รหัสผ่านไม่ถูกต้อง',
                confirmButtonText: 'ตกลง',
              })
            }
            
          }catch(err){
            console.log("Not Found");
          }
    
      }
      xhttp.open("GET", "/staffLogin");
      xhttp.send();
  
    } 
     return false;
  }
  
  
     
    
  
      
  
  
  
      
  
  
  
  