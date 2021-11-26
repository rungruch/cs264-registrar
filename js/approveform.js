


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
         results = regex.exec(url);
     if (!results) return null;
     if (!results[2]) return '';
     return decodeURIComponent(results[2].replace(/\+/g, ' '));
 }

function clickeditclass(){
    let tmpid = getParameterByName('id');   
    window.location.replace ("edit_class_table?id="+tmpid) ;
 }
 function clickclasstable(){
    let tmpid = getParameterByName('id');   
    window.location.replace ("/class_table?id="+tmpid) ;
 }
 function clickeditgrade(){
    let tmpid = getParameterByName('id');   
    window.location.replace ("/edit_grade?id="+tmpid) ;
 }

 function clickfilldoc(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/fiilldocument?id="+tmpid); 
 }

 function clickstudentstatus(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/studentstatus?id="+tmpid);

 }
 function clickstudentmain(){
    let tmpid = getParameterByName('id'); 
    let tmpname = getParameterByName('name'); 
    if(tmpname==null){
        tmpname =" ";
    }
    window.location.replace ("/student-main?id="+tmpid+"&name="+tmpname);
 }

 function signout(){
    window.location.replace ("/logintemp");
 }

 function clickinformation(){
    let tmpid = getParameterByName('id'); 
    window.location.replace ("/edit_information?id="+tmpid);
 }

 function searchformprint(){
   let tmpid = getParameterByName('id'); 
   window.location.replace ("/html/searchformprint.html?id="+tmpid);
}



    function dropd(){
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
        
        for (i = 0; i < dropdown.length; i++) {
          dropdown[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
          } else {
          dropdownContent.style.display = "block";
          }
          });
        }
    }


function apploveornot(){
  // alert("in");
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
     let role = getParameterByName('role'); 
    // alert(role);
    let approve;
    if (document.getElementById('true').checked) {
      approve = true;
    }else{
      approve = false;
    }
    // let approve = document.getElementsByName("approveja")[0].value;
    
   // alert (approve);
   //  if (approve == "true"){
   //     approve = true;
   //  }
    // else{
    //    approve =false;
    // }
     let treason = document.getElementById("treason").value;
    
    for (let li  = count-1 ; li>=0 ;li--){
       
       if(studentid == studentclass[li].studentId && studentclass[li].subid == subject){
          foundedstudent_index = li;
      
         if(role == 'advisor subject_teacher'){
           // alert("lllll");
            let json1 = {
               "date":studentclass[li].date,"studentFirstName":studentclass[li].studentFirstName,"studentLastName":studentclass[li].studentLastName,
               "studentId":studentclass[li].studentId,"studentYear":studentclass[li].studentYear,"studyField":studentclass[li].studyField,
              "advisor":studentclass[li].advisor,"address_num":studentclass[li].address_num,"moo":studentclass[li].moo,
              "tumbol":studentclass[li].tumbol,"amphur":studentclass[li].amphur,"mobilephone":studentclass[li].mobilephone,
              "phone":studentclass[li].phone,"province":studentclass[li].province,"postcode":studentclass[li].postcode,
              "cause":studentclass[li].cause,"sub_addORrem":studentclass[li].sub_addORrem,"subid":studentclass[li].subid,
              "subname":studentclass[li].subname,"subsec":studentclass[li].subsec,"subdate":studentclass[li].subdate,
              "subweight":studentclass[li].subweight,"subprofname":studentclass[li].subprofname,"teacheradvisorcheck":true,"teacheradvisorapprove":approve,
              "teachersubjectcheck":true,"teachersubjectapprove":approve,"authorcheck":studentclass[li].authorcheck,"authorapprove":studentclass[li].authorapprove,
              "teacheradvisorcomment":treason,"teachersubjectcomment":treason,"authorcomment":studentclass[li].authorcomment
            }
         delete studentclass[li];
        // studentclass.push(json1);
         studentclass[li] = json1;
         saveformapprove(studentclass);
         break;
         
         }
            if(role == 'advisor'){
               let json2 = {
                  "date":studentclass[li].date,"studentFirstName":studentclass[li].studentFirstName,"studentLastName":studentclass[li].studentLastName,
                  "studentId":studentclass[li].studentId,"studentYear":studentclass[li].studentYear,"studyField":studentclass[li].studyField,
                 "advisor":studentclass[li].advisor,"address_num":studentclass[li].address_num,"moo":studentclass[li].moo,
                 "tumbol":studentclass[li].tumbol,"amphur":studentclass[li].amphur,"mobilephone":studentclass[li].mobilephone,
                 "phone":studentclass[li].phone,"province":studentclass[li].province,"postcode":studentclass[li].postcode,
                 "cause":studentclass[li].cause,"sub_addORrem":studentclass[li].sub_addORrem,"subid":studentclass[li].subid,
                 "subname":studentclass[li].subname,"subsec":studentclass[li].subsec,"subdate":studentclass[li].subdate,
                 "subweight":studentclass[li].subweight,"subprofname":studentclass[li].subprofname,"teacheradvisorcheck":true ,"teacheradvisorapprove":approve,
                 "teachersubjectcheck":studentclass[li].teachersubjectcheck,"teachersubjectapprove":studentclass[li].teachersubjectapprove,"authorcheck":studentclass[li].authorcheck,"authorapprove":studentclass[li].authorapprove,
                 "teacheradvisorcomment":treason,"teachersubjectcomment":studentclass[li].teachersubjectcomment,"authorcomment":studentclass[li].authorcomment
               }
         delete studentclass[li];
        // studentclass.push(json1);
        studentclass[li] = json2;
         saveformapprove(studentclass);
          break;
            
            }
               if(role == 'subject_teacher'){
                  let json1 = {
                     "date":studentclass[li].date,"studentFirstName":studentclass[li].studentFirstName,"studentLastName":studentclass[li].studentLastName,
                     "studentId":studentclass[li].studentId,"studentYear":studentclass[li].studentYear,"studyField":studentclass[li].studyField,
                    "advisor":studentclass[li].advisor,"address_num":studentclass[li].address_num,"moo":studentclass[li].moo,
                    "tumbol":studentclass[li].tumbol,"amphur":studentclass[li].amphur,"mobilephone":studentclass[li].mobilephone,
                    "phone":studentclass[li].phone,"province":studentclass[li].province,"postcode":studentclass[li].postcode,
                    "cause":studentclass[li].cause,"sub_addORrem":studentclass[li].sub_addORrem,"subid":studentclass[li].subid,
                    "subname":studentclass[li].subname,"subsec":studentclass[li].subsec,"subdate":studentclass[li].subdate,
                    "subweight":studentclass[li].subweight,"subprofname":studentclass[li].subprofname,"teacheradvisorcheck":studentclass[li].teacheradvisorcheck,"teacheradvisorapprove":studentclass[li].teacheradvisorapprove,
                    "teachersubjectcheck":true,"teachersubjectapprove":approve,"authorcheck":studentclass[li].authorcheck,"authorapprove":studentclass[li].authorapprove,
                    "teacheradvisorcomment":studentclass[li].teacheradvisorcomment,"teachersubjectcomment":treason,"authorcomment":studentclass[li].authorcomment
                  }
                  delete studentclass[li];
        // studentclass.push(json1);
        studentclass[li] = json1;
         saveformapprove(studentclass);
          break;
                            
               }
               if(role == 'admin'){
                  let json1 = {
                     "date":studentclass[li].date,"studentFirstName":studentclass[li].studentFirstName,"studentLastName":studentclass[li].studentLastName,
                     "studentId":studentclass[li].studentId,"studentYear":studentclass[li].studentYear,"studyField":studentclass[li].studyField,
                    "advisor":studentclass[li].advisor,"address_num":studentclass[li].address_num,"moo":studentclass[li].moo,
                    "tumbol":studentclass[li].tumbol,"amphur":studentclass[li].amphur,"mobilephone":studentclass[li].mobilephone,
                    "phone":studentclass[li].phone,"province":studentclass[li].province,"postcode":studentclass[li].postcode,
                    "cause":studentclass[li].cause,"sub_addORrem":studentclass[li].sub_addORrem,"subid":studentclass[li].subid,
                    "subname":studentclass[li].subname,"subsec":studentclass[li].subsec,"subdate":studentclass[li].subdate,
                    "subweight":studentclass[li].subweight,"subprofname":studentclass[li].subprofname,"teacheradvisorcheck":studentclass[li].teacheradvisorcheck,"teacheradvisorapprove":studentclass[li].teacheradvisorapprove,
                    "teachersubjectcheck":studentclass[li].teachersubjectcheck,"teachersubjectapprove":studentclass[li].teachersubjectapprove,"authorcheck":true,"authorapprove":approve,
                    "teacheradvisorcomment":studentclass[li].teacheradvisorcomment,"teachersubjectcomment":studentclass[li].teachersubjectcomment,"authorcomment":treason
                  }
                  delete studentclass[li];
        // studentclass.push(json1);
        studentclass[li] = json1;
         saveformapprove(studentclass);
        
          break;
                       
               }
       }
       
     }
  
 }
     xhttp.open("GET","/getform");
     xhttp.send()
}

function saveformapprove(jsonstudent){
  // alert("in2");

   var myJSON = JSON.stringify(jsonstudent);
  // alert(myJSON);
const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    let msg = this.responseText;
// alert(msg);
alert("บันทึกข้อมูลแล้ว");
clickstdlist()
};
xhttp.open("POST", "/saveStudentformapprove");
xhttp.send(myJSON);

   
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

           //alert(1);
           document.getElementById("date").value= studentclass[li].date;
            document.getElementById("fname").value= studentclass[li].studentFirstName;
            document.getElementById("lname").value= studentclass[li].studentLastName;
            document.getElementById("s_id").value= studentclass[li].studentId;
            document.getElementById("s_year").value= studentclass[li].studentYear;
            document.getElementById("major").value= studentclass[li].studyField;
            document.getElementById("advisor").value= studentclass[li].advisor;

            document.getElementById("mobilephone").value= studentclass[li].mobilephone;
            document.getElementById("phone").value= studentclass[li].phone;
            
            document.getElementById("sub_addORrem").value= studentclass[li].sub_addORrem;
            document.getElementById("reason").value= studentclass[li].cause;
            document.getElementById("subid").value= studentclass[li].subid;
            document.getElementById("subname").value= studentclass[li].subname;
            document.getElementById("subsec").value= studentclass[li].subsec;
            document.getElementById("subdate").value= studentclass[li].subdate;
            document.getElementById("subw").value= studentclass[li].subweight;
            document.getElementById("subprofname").value= studentclass[li].subprofname;

            var tmpturl = '/html/tlookup_class_table.html?id='+studentclass[li].studentId
            document.getElementById("tablelookup").href=tmpturl;
           break;
       }
       
        
     }
  
//alert("end");
 }
     xhttp.open("GET","/getform");
     xhttp.send()
}



function clickteachermain(){
   let tmpid = getParameterByName('id'); 
   window.location.replace ("/html/teacher-main.html?id="+tmpid);
}

function clickstdlist(){
   let tmpid = getParameterByName('id'); 
   window.location.replace ("/html/stdlist.html?id="+tmpid);
}




function fillformprint(){
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

           //alert(1);
           document.getElementById("date").value= studentclass[li].date;
            document.getElementById("fname").value= studentclass[li].studentFirstName;
            document.getElementById("lname").value= studentclass[li].studentLastName;
            document.getElementById("s_id").value= studentclass[li].studentId;
            document.getElementById("s_year").value= studentclass[li].studentYear;
            document.getElementById("major").value= studentclass[li].studyField;
            document.getElementById("advisor").value= studentclass[li].advisor;

            document.getElementById("mobilephone").value= studentclass[li].mobilephone;
            document.getElementById("phone").value= studentclass[li].phone;
      

            document.getElementById("address_num").value= studentclass[li].address_num;
            document.getElementById("moo").value= studentclass[li].moo;
            document.getElementById("tumbol").value= studentclass[li].tumbol;
            document.getElementById("amphur").value= studentclass[li].amphur;
            document.getElementById("province").value= studentclass[li].province;
            document.getElementById("postcode").value= studentclass[li].postcode;


            document.getElementById("sub_addORrem").value= studentclass[li].sub_addORrem;
            document.getElementById("reason").value= studentclass[li].cause;
            document.getElementById("subid").value= studentclass[li].subid;
            document.getElementById("subname").value= studentclass[li].subname;
            document.getElementById("subsec").value= studentclass[li].subsec;
            document.getElementById("subdate").value= studentclass[li].subdate;
            document.getElementById("subw").value= studentclass[li].subweight;
            document.getElementById("subprofname").value= studentclass[li].subprofname;

            document.getElementById("advisorcomment").value= studentclass[li].teacheradvisorcomment;
            document.getElementById("staffcomment").value= studentclass[li].authorcomment;
            document.getElementById("subjectcomment").value= studentclass[li].teachersubjectcomment;
       
            document.getElementById("advisorimage").src="/siguploads/"+studentclass[li].advisor+".jpg";
            document.getElementById("subjectimage").src="/siguploads/"+studentclass[li].subprofname+".jpg";
            document.getElementById("staffimage").src="/siguploads/admin.jpg";
            
           break;
       }
          
     }
  
//alert("end");
 }
     xhttp.open("GET","/getform");
     xhttp.send()
}


function openGradeNewTab() {
  
   let studentid = getParameterByName('studentid'); 
   window.open('/pdf/'+studentid+'.pdf', '_blank').focus();
 
  }

