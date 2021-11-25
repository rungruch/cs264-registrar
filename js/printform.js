
window.addEventListener('load',formatAMPM);

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


 function formatAMPM() {
    
    var d = new Date();
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        
        document.getElementById("para1").innerHTML = ' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' ';
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
            document.getElementById("h_num").value= studentclass[li].address_num;
            document.getElementById("moo").value= studentclass[li].moo;
            document.getElementById("s_district").value= studentclass[li].tumbol;
            document.getElementById("district").value= studentclass[li].amphur;
            document.getElementById("province").value= studentclass[li].province;
            document.getElementById("post_code").value= studentclass[li].postcode;
            document.getElementById("mobile_phone").value= studentclass[li].mobilephone;
            document.getElementById("home_phone").value= studentclass[li].phone;
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
       
            document.getElementById("advisorimage").src="/siguploads/"+studentclass[li].advisor+".png";
            document.getElementById("subjectimage").src="/siguploads/"+studentclass[li].subprofname+".png";
            
            
       
       
       
       
           

           break;
       }
       
        
     }
  
//alert("end");
 }
     xhttp.open("GET","/getform");
     xhttp.send()
}