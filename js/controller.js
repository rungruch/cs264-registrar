window.addEventListener('load', selectyear);
window.addEventListener('load', selectmonth);
window.addEventListener('load', selectdate);
window.addEventListener('load',selectid);

const d = new Date();
function selectyear(){    
    let year =  d.getFullYear()+543;
let element = document.getElementById("year");
let optelement = document.createElement("option");
optelement.value = year;
optelement.innerHTML = year;
element.appendChild(optelement);
}
function selectmonth(){
    $("#month").val(d.getMonth()+1);
}
function selectdate(){
    $("#date").val(d.getDate());
    
}

function selectid(){
    let tmpid = getParameterByName('id'); 
    
    $("#s_id").val(tmpid);
    checkyear()
}

function checkyear(){
    let s_idtext = document.getElementById("s_id");

    if (s_idtext.value.length == 10){
        let tmp = s_idtext.value.slice(0,2);
        setyear(tmp);
    }

    if (s_idtext.value.length == 2){
        setyear(s_idtext.value);
    }
}


function setyear(text){
    let fin = (((d.getFullYear()+543)-2500)-text)+1;
    if(fin > 7 || fin < 1){
        $("#s_year").val(1); 
    }
    else{
        $("#s_year").val(fin);
    }
}





function c_chackfname(){
    let c_fname = document.forms["Form"]["fname"].value;
    if((isNaN(c_fname)==false )&& (c_fname.length != 0)){
        alert("กรุณากรอกชื่อจริงให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        }
}


function c_chacklname(){
    let c_lname = document.forms["Form"]["lname"].value;
    if((isNaN(c_lname)==false) && (c_lname.length != 0) ){
        alert("กรุณากรอกนามสกุลให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        }
}


function c_chackid(){
    let c_id = document.forms["Form"]["s_id"].value;
    if((isNaN(c_id)==true) && (c_id.length != 0) ){
        alert("กรุณากรอกเลขทะเบียนให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:6312345678");
        }
    
        if((c_id.length != 0)){
            if((c_id.length != 10) ){
                alert("กรุณากรอกเลขทะเบียนให้ถูกต้องและต้องเป็นตัวเลข 10 หลัก  เช่น:6312345678");
               
            }  

        }
   
}

function c_chackmajor(){
    let c_major = document.forms["Form"]["major"].value;
    if((isNaN(c_major)==false) && (c_major.length != 0) ){
        alert("กรุณากรอกสาขาวิชาให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        }

}

function c_chackadvisor(){

    let c_advisor = document.forms["Form"]["advisor"].value;
    if((isNaN(c_advisor)==false) && (c_advisor.length != 0) ){
        alert("กรุณากรอกอาจารย์ที่ปรึกษาให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        }
}

function c_chackpost(){
  
    let c_postcode = document.forms["Form"]["post_code"].value;
    if((isNaN(c_postcode)==true)  || (c_postcode.length != 5) ){
        alert("กรุณากรอกหัสไปรษณีย์ให้ถูกต้องซึ่งเป็นตัวเลข และต้องเป็นตัวเลข 5 หลัก เช่น:12121");
       }

}

function c_chackphone(){

    let c_mobile_phone = document.forms["Form"]["mobile_phone"].value;
    if(isNaN(c_mobile_phone)==true){
        alert("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:0812345678");
        }
    if(c_mobile_phone.length != 10){
            alert("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้องและต้องซึ่งเป็นตัวเลข 10 หลัก เช่น:0812345678");
         
        }  
        if(c_mobile_phone.charAt(0) != '0'){
            alert("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้องและต้องซึ่งขึ้นต้นด้วย 0 เช่น:0812345678");
           
        }  

}

function c_chackhomephone(){
    let c_home_phone = document.forms["Form"]["home_phone"].value;
    if(c_home_phone.length != 0){

        if(isNaN(c_home_phone)==true){
            alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:021234567,0123456789");
            return false;}
        if(c_home_phone.charAt(0) == '0' &&c_home_phone.charAt(1)== '1'&& c_home_phone.length != 10){
            alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องและต้อง หากขึ้นต้นด้วย 01 จะต้องเป็นตัวเลข 10 หลัก เช่น:0123456789");
        return false;
        }else{
            if(c_home_phone.length != 9 && c_home_phone.charAt(1)!= '1'){
                alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องและต้องซึ่งเป็นตัวเลข 9 หลัก เช่น:021234567");
                return false;
            }  
            if(c_home_phone.charAt(0) != '0'){
                alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องและต้องซึ่งขึ้นต้นด้วย 0 เช่น:021234567");
                return false;
            }  


        }

        
    }  


}






function conslog(){

    let c_fname = document.forms["Form"]["fname"].value;
    if((isNaN(c_fname)==false )&& (c_fname.length != 0)){
        alert("กรุณากรอกชื่อจริงให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        return false;
        }


    let c_lname = document.forms["Form"]["lname"].value;
    if((isNaN(c_lname)==false) && (c_lname.length != 0) ){
        alert("กรุณากรอกนามสกุลให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        return false;
        }

    let c_id = document.forms["Form"]["s_id"].value;
    if((isNaN(c_id)==true) && (c_id.length != 0) ){
        alert("กรุณากรอกเลขทะเบียนให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:6312345678");
        return false;
        }
    
        if((c_id.length != 0)){
            if((c_id.length != 10) ){
                alert("กรุณากรอกเลขทะเบียนให้ถูกต้องและต้องเป็นตัวเลข 10 หลัก  เช่น:6312345678");
                return false;
               
            }  

        }
   

    let c_major = document.forms["Form"]["major"].value;
    if((isNaN(c_major)==false) && (c_major.length != 0) ){
        alert("กรุณากรอกสาขาวิชาให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        return false;
        }




    let c_advisor = document.forms["Form"]["advisor"].value;
    if((isNaN(c_advisor)==false) && (c_advisor.length != 0) ){
        alert("กรุณากรอกอาจารย์ที่ปรึกษาให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        return false;
        }



  
    let c_postcode = document.forms["Form"]["post_code"].value;
    if((isNaN(c_postcode)==true)  || (c_postcode.length != 5) ){
        alert("กรุณากรอกหัสไปรษณีย์ให้ถูกต้องซึ่งเป็นตัวเลข และต้องเป็นตัวเลข 5 หลัก เช่น:12121");
        return false;
       }





    let c_mobile_phone = document.forms["Form"]["mobile_phone"].value;
    if(isNaN(c_mobile_phone)==true){
        alert("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:0812345678");
        return false;
        }
    if(c_mobile_phone.length != 10){
            alert("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้องและต้องซึ่งเป็นตัวเลข 10 หลัก เช่น:0812345678");
            return false;
         
        }  
        if(c_mobile_phone.charAt(0) != '0'){
            alert("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้องและต้องซึ่งขึ้นต้นด้วย 0 เช่น:0812345678");
            return false;
           
        }  




    let c_home_phone = document.forms["Form"]["home_phone"].value;
    if(c_home_phone.length != 0){

        if(isNaN(c_home_phone)==true){
            alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:021234567,0123456789");
            return false;}
        if(c_home_phone.charAt(0) == '0' &&c_home_phone.charAt(1)== '1'&& c_home_phone.length != 10){
            alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องและต้อง หากขึ้นต้นด้วย 01 จะต้องเป็นตัวเลข 10 หลัก เช่น:0123456789");
        return false;
        }else{
            if(c_home_phone.length != 9 && c_home_phone.charAt(1)!= '1'){
                alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องและต้องซึ่งเป็นตัวเลข 9 หลัก เช่น:021234567");
                return false;
            }  
            if(c_home_phone.charAt(0) != '0'){
                alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องและต้องซึ่งขึ้นต้นด้วย 0 เช่น:021234567");
                return false;
            }  


        }

        
    }  
   
    let year =document.forms["Form"]["year"].value; 
    let month = document.forms["Form"]["month"].value; 
    let date = document.forms["Form"]["date"].value; 
    let n_date = year+'-'+month+'-'+date;


    var json = {
        "date":n_date,"studentFirstName":document.forms["Form"]["fname"].value,"studentLastName":document.forms["Form"]["lname"].value,
         "studentId":document.forms["Form"]["s_id"].value,"studentYear":document.forms["Form"]["s_year"].value,"studyField":document.forms["Form"]["major"].value,
        "advisor":document.forms["Form"]["advisor"].value,"address_num":document.forms["Form"]["h_num"].value,"moo": document.forms["Form"]["moo"].value,
        "tumbol":document.forms["Form"]["s_district"].value,"amphur":document.forms["Form"]["district"].value,"mobilephone":document.forms["Form"]["mobile_phone"].value,
        "phone": document.forms["Form"]["home_phone"].value,"province":document.forms["Form"]["province"].value,"postcode":document.forms["Form"]["post_code"].value,
        "cause":document.forms["Form"]["reason"].value,"sub_addORrem":document.getElementById("subaddrem").value,"subid": document.getElementById("subid").value,
        "subname":document.getElementById("subname").value,"subsec":document.getElementById("subsec").value,"subdate":document.getElementById("subdate").value,
        "subweight":document.getElementById("subw").value,"subprofname":document.getElementById("subprofname").value,"teacheradvisorcheck":false,"teacheradvisorapprove":false,
        "teachersubjectcheck":false,"teachersubjectapprove":false,"authorcheck":false,"authorapprove":false,"teacheradvisorcomment":"","teachersubjectcomment":"","authorcomment":""

    };
  
//let text = '{"date": "'+n_date+'", "studentFirstName": "'+name+'", "studentLastName": "'+surname+'",  "studentId": "'+sid+'", "studentYear": '+syear+', "studyField": "'+field+'", "advisor": "'+advisor+'", "addressNumber": "'+address_num+'", "moo": "'+moo+'", "tumbol": "'+tumbol+'", "amphur": "'+amphur+'", "province": "'+province+'", "postCode": "'+postcode+'",  "mobilePhone": "'+mobilephone+'", "phone": "'+phone+'",  "cause": "'+cause+'",';
//let tmp = '"addSubjectList": ['+'{'+'  "subjectCode": "'+idtmp.value+'","subjectName": "'+nametmp.value+'","subjectSection": "'+sectmp.value+'","subjectDate": "'+datetmp.value+'", "subjectCredit": "'+nuaitmp.value+'","subjectTeacher": "'+proftmp.value+'", "addorrem": '+addorrem.value+'   }';
        
var myJSON = JSON.stringify(json);
const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    let msg = this.responseText;
    alert("บันทึกเรียบร้อย");
    clickstudentmain();

};
xhttp.open("POST", "/saveStudentform");
xhttp.send(myJSON);
 //return false;
}






function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
         results = regex.exec(url);
     if (!results) return null;
     if (!results[2]) return '';
     return decodeURIComponent(results[2].replace(/\+/g, ' '));
 }

 function clickedaddcontactinformation(){
    let tmpid = getParameterByName('id');   
    window.location.replace ("/html/studentaddinformation.html?id="+tmpid) ;
 }
 function clickeditclass(){
    let tmpid = getParameterByName('id');   
    window.location.replace ("/edit_class_table?id="+tmpid) ;
 }
 function clickclasstable(){
    let tmpid = getParameterByName('id');   
    window.location.replace ("/class_table?id="+tmpid) ;
 }
 function clickeditgrade(){
    let tmpid = getParameterByName('id');   
    window.location.replace ("/html/gradeEdit.html?id="+tmpid) ;
 }

 function clickfilldoc(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/uploadpage?id="+tmpid); 
 }

 function clickstudentstatus(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/studentstatus?id="+tmpid);

 }
 function clickdigital(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/digitalsig?id="+tmpid);

 }

 function clickteachercontact(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/search");

 }

 function signout(){
    window.location.replace ("/html/login.html");
 }

 function clickstudentmain(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/html/student-main.html?id="+tmpid);
 }

 function clickinformation(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/edit_information?id="+tmpid);
 }


 function clickstatus(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/status?id="+tmpid);
 }

function clickfillform(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/fillform?id="+tmpid);
}



function clicksearchform(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/searchform?id="+tmpid);
}




function clickaddrem(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/addremform?id="+tmpid);
}



function clicksearchformprint(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/searchformprint?id="+tmpid);
}


function clickadminsearchform(){
    window.location.replace ("/searchformadmin");
}



    
function fillform(){
    // alert("in");
 
     // alert(name+' '+year);
      // search student by name and year param and set hyperlink to info of student
  
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function(){
      let json = this.responseText;
      let studentclass = JSON.parse(json);
  
      var count = 0;
      while (studentclass[count]) {
          count++;
      }
 
     // alert(count);
     
      let studentid = getParameterByName('studentid'); 
      let subject = getParameterByName('subject'); 
     // alert(studentid+" "+subject);
     
     
     for (let li  = count-1 ; li>=0 ;li--){
        
        if(studentid == studentclass[li].studentId && studentclass[li].subid == subject){
            var foundeditindex = li;
            //alert(1);
           
             document.getElementById("fname").value= studentclass[li].studentFirstName;
             document.getElementById("lname").value= studentclass[li].studentLastName;
             document.getElementById("s_id").value= studentclass[li].studentId;
             document.getElementById("s_year").value= studentclass[li].studentYear;
             document.getElementById("major").value= studentclass[li].studyField;
             document.getElementById("advisor").value= studentclass[li].advisor;

             document.getElementById("mobile_phone").value = studentclass[li].mobilephone;
             document.getElementById("home_phone").value = studentclass[li].phone;
             document.getElementById("h_num").value = studentclass[li].address_num;
             document.getElementById("moo").value = studentclass[li].moo;
             document.getElementById("s_district").value = studentclass[li].tumbol;
             document.getElementById("district").value = studentclass[li].amphur;
             document.getElementById("province").value = studentclass[li].province;
             document.getElementById("post_code").value = studentclass[li].postcode;
             
             document.getElementById("reason").value= studentclass[li].cause;
             document.getElementById("subid").value= studentclass[li].subid;
             document.getElementById("subname").value= studentclass[li].subname;
             document.getElementById("subsec").value= studentclass[li].subsec;
             document.getElementById("subdate").value= studentclass[li].subdate;
             document.getElementById("subw").value= studentclass[li].subweight;
             document.getElementById("subprofname").value= studentclass[li].subprofname;
            break;
        }
        
         
      }
   
 //alert("end");
  }
      xhttp.open("GET","/getform");
      xhttp.send()
 }


function toeditform(){
   // alert("in");
    
    let c_fname = document.forms["Form"]["fname"].value;
    if((isNaN(c_fname)==false )&& (c_fname.length != 0)){
        alert("กรุณากรอกชื่อจริงให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        return false;
        }


    let c_lname = document.forms["Form"]["lname"].value;
    if((isNaN(c_lname)==false) && (c_lname.length != 0) ){
        alert("กรุณากรอกนามสกุลให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        return false;
        }

    let c_id = document.forms["Form"]["s_id"].value;
    if((isNaN(c_id)==true) && (c_id.length != 0) ){
        alert("กรุณากรอกเลขทะเบียนให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:6312345678");
        return false;
        }
    
        if((c_id.length != 0)){
            if((c_id.length != 10) ){
                alert("กรุณากรอกเลขทะเบียนให้ถูกต้องและต้องเป็นตัวเลข 10 หลัก  เช่น:6312345678");
                return false;
               
            }  

        }
   

    let c_major = document.forms["Form"]["major"].value;
    if((isNaN(c_major)==false) && (c_major.length != 0) ){
        alert("กรุณากรอกสาขาวิชาให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        return false;
        }




    let c_advisor = document.forms["Form"]["advisor"].value;
    if((isNaN(c_advisor)==false) && (c_advisor.length != 0) ){
        alert("กรุณากรอกอาจารย์ที่ปรึกษาให้ถูกต้องซึ่งเป็นตัวอักษรทั้งหมด");
        return false;
        }



  
    let c_postcode = document.forms["Form"]["post_code"].value;
    if((isNaN(c_postcode)==true)  || (c_postcode.length != 5) ){
        alert("กรุณากรอกหัสไปรษณีย์ให้ถูกต้องซึ่งเป็นตัวเลข และต้องเป็นตัวเลข 5 หลัก เช่น:12121");
        return false;
       }





    let c_mobile_phone = document.forms["Form"]["mobile_phone"].value;
    if(isNaN(c_mobile_phone)==true){
        alert("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:0812345678");
        return false;
        }
    if(c_mobile_phone.length != 10){
            alert("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้องและต้องซึ่งเป็นตัวเลข 10 หลัก เช่น:0812345678");
            return false;
         
        }  
        if(c_mobile_phone.charAt(0) != '0'){
            alert("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้องและต้องซึ่งขึ้นต้นด้วย 0 เช่น:0812345678");
            return false;
           
        }  




    let c_home_phone = document.forms["Form"]["home_phone"].value;
    if(c_home_phone.length != 0){

        if(isNaN(c_home_phone)==true){
            alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:021234567,0123456789");
            return false;}
        if(c_home_phone.charAt(0) == '0' &&c_home_phone.charAt(1)== '1'&& c_home_phone.length != 10){
            alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องและต้อง หากขึ้นต้นด้วย 01 จะต้องเป็นตัวเลข 10 หลัก เช่น:0123456789");
        return false;
        }else{
            if(c_home_phone.length != 9 && c_home_phone.charAt(1)!= '1'){
                alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องและต้องซึ่งเป็นตัวเลข 9 หลัก เช่น:021234567");
                return false;
            }  
            if(c_home_phone.charAt(0) != '0'){
                alert("กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้องและต้องซึ่งขึ้นต้นด้วย 0 เช่น:021234567");
                return false;
            }  


        }

        
    }  










   

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function(){
      let json = this.responseText;
      let studentclass = JSON.parse(json);
  
      var count = 0;
      while (studentclass[count]) {
          count++;
      }
      let foundedstudent_index = -1;
      let studentid = getParameterByName('studentid'); 
      let subject = getParameterByName('subject'); 
     for (let li  = count-1 ; li>=0 ;li--){
        
        if(studentid == studentclass[li].studentId && studentclass[li].subid == subject){
           foundedstudent_index = li;
           let year =document.forms["Form"]["year"].value; 
    let month = document.forms["Form"]["month"].value; 
    let date = document.forms["Form"]["date"].value; 
    let n_date = year+'-'+month+'-'+date;


    var json5 = {
        "date":n_date,"studentFirstName":document.forms["Form"]["fname"].value,"studentLastName":document.forms["Form"]["lname"].value,
         "studentId":document.forms["Form"]["s_id"].value,"studentYear":document.forms["Form"]["s_year"].value,"studyField":document.forms["Form"]["major"].value,
        "advisor":document.forms["Form"]["advisor"].value,"address_num":document.forms["Form"]["h_num"].value,"moo": document.forms["Form"]["moo"].value,
        "tumbol":document.forms["Form"]["s_district"].value,"amphur":document.forms["Form"]["district"].value,"mobilephone":document.forms["Form"]["mobile_phone"].value,
        "phone": document.forms["Form"]["home_phone"].value,"province":document.forms["Form"]["province"].value,"postcode":document.forms["Form"]["post_code"].value,
        "cause":document.forms["Form"]["reason"].value,"sub_addORrem":document.getElementById("subaddrem").value,"subid": document.getElementById("subid").value,
        "subname":document.getElementById("subname").value,"subsec":document.getElementById("subsec").value,"subdate":document.getElementById("subdate").value,
        "subweight":document.getElementById("subw").value,"subprofname":document.getElementById("subprofname").value,"teacheradvisorcheck":false,"teacheradvisorapprove":false,
        "teachersubjectcheck":false,"teachersubjectapprove":false,"authorcheck":false,"authorapprove":false,"teacheradvisorcomment":"","teachersubjectcomment":"","authorcomment":""

    };
           delete studentclass[li];
           studentclass[li] = json5;
           saveformedit(studentclass);
          alert('แก้ไขเรียบร้อย');
          clickstatus();
            return false;
         break;

        }     
      } 
  }
      xhttp.open("GET","/getform");
      xhttp.send()
 } 



function saveformedit(jsonstudent){
  //  alert("in2");
    var myJSON = JSON.stringify(jsonstudent);
   // alert(myJSON);
 const xhttp = new XMLHttpRequest();
 xhttp.onload = function(){
     let msg = this.responseText;
    // alert(msg);
 };
 xhttp.open("POST", "/saveStudentformapprove");
 xhttp.send(myJSON);
 
    
 }