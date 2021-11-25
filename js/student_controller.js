




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


var add_total = 0;
function add_addsubject(){
 
    

    let curaddrem = 0;
    if(add_total == 0){
        add_total = 1;
        
    curaddrem=add_total;}
   else{add_total++;
    curaddrem = add_total;} 
    var table = document.getElementById("addtable");
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    
    cell1.innerHTML = '<input type="text" size="3" maxlength="1"id="subyear_'+add_total+'"'+'name="subyear_'+add_total+'" required>';
    cell2.innerHTML = '<input type="text" size="3" maxlength="1"id="subterm_'+add_total+'"'+'name="subterm_'+add_total+'" required>';
    cell3.innerHTML = '<input type="text" size="4" maxlength="4"id="subeduyear_'+add_total+'"'+'name="subeduyear_'+add_total+'" required>';
    cell4.innerHTML = '<input type="text" size="6" maxlength="5 "onkeyup="checksubj()" id="subid_'+add_total+'"'+'name="subid_'+add_total+'" required>';
    cell5.innerHTML = '<input type="text" size="40" id="subname_'+add_total+'"'+'name="subname_'+add_total+'" required>';
    cell6.innerHTML = '<input type="text" size="6" maxlength="6" id="subsec_'+add_total+'"'+'name="subsec_'+add_total+'" required>';
    cell7.innerHTML = '<input type="text" size="15" id="subdate_'+add_total+'"'+'name="subdate_'+add_total+'" required>';
    cell8.innerHTML = '<input type="text" size="15" id="middate_'+add_total+'"'+'name="middate_'+add_total+'"  required>';
    cell9.innerHTML = '<input type="text" size="15" id="finaldate_'+add_total+'"'+'name="finaldate_'+add_total+'" required>';
   
    document.getElementById('addsub').innerHTML = add_total;
}

function remove_addsubject(){
    if(add_total >0){
        document.getElementById("addtable").deleteRow(add_total);
  add_total--;
  document.getElementById('addsub').innerHTML = add_total;

    }

}

function validateForm() {
    if(add_total > 0){
        for (let i = 1; i <= add_total; i++) {
        let yerartmp = document.getElementById(('subyear_'+i));
        let termtmp = document.getElementById(('subterm_'+i));
        let eduyeartmp = document.getElementById(('subeduyear_'+i));
        let sectmp = document.getElementById(('subsec_'+i));
        
        if(isNaN(yerartmp.value)==true){
            alert("กรุณากรอกชั้นปีให้ถูกต้องซึ่งเป็นตัวเลขหนึ่งตัว เช่น:1");
            return false;}
            if(isNaN(termtmp.value)==true){
                alert("กรุณากรอกเทอมให้ถูกต้องซึ่งเป็นตัวเลขหนึ่งตัว เช่น:2");
                return false;}
                if(isNaN(eduyeartmp.value)==true){
                    alert("กรุณากรอกปีการศึกษาให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:2564");
                    return false;}
                        if(isNaN(sectmp.value)==true){
                            alert("กรุณากรอก section ให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:010001");
                            return false;}
                        

                        if((yerartmp.value)>7||(yerartmp.value)<1){
                            alert("กรุณากรอกชั้นปีให้ถูกต้องซึ่งเป็นตัวเลขที่อยู่ในช่วง 1-7 เช่น 1");
                            return false;}
                            if((termtmp.value)>3||(termtmp.value)<1){
                                alert("กรุณากรอกเทอมให้ถูกต้องซึ่งเป็นตัวเลขที่อยู่ในช่วง 1-3 เช่น:1 / 2 / 3 (ซัมเมอร์)");
                                return false;}

                            if((eduyeartmp.value)>3000 || (eduyeartmp.value)<2500){
                                alert("กรุณากรอกชั้นปีให้ถูกต้องซึ่งเป็นปีพศ.เช่น 2564");
                                return false;}
    }



    alert("บันทึกข้อมูลเรียบร้อย");
    conslog()
    clickeditclass()
    return false;
     //  preventing page refreshing when submit  
}}




var tablecnt = 0;

 


  
     function checksubj(){
        
    
     
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
    let json = this.responseText;
    let allclass = JSON.parse(json);

    var count = 0;
    while (allclass[count]) {
        count++;
    }



    let tmploop_cnt = add_total;
   
    for (let xn = 1;xn <= tmploop_cnt;xn++){
        //  alert("in2");
          let texttmp = "subid_"+xn;
         // alert(texttmp);
          let tmpidclass = document.getElementById(texttmp).value;
          //alert(tmpidclass);
          if(tmpidclass.length == 5){
             // alert("in");
              for (let i = 0 ;i<count;i++){
                  if(tmpidclass.toUpperCase() == allclass[i].subjectCode)
                  {
                     // alert("trueja");
                      let textsubname_tmp = "#subname_"+xn;
                      $(textsubname_tmp).val(allclass[i].subjectName);
                      let textsubid_tmp = "#subid_"+xn;
                      $(textsubid_tmp).val(allclass[i].subjectCode);
                  }
              }
          }
  
      }
}
    xhttp.open("GET","/getreg_subject");
    xhttp.send()
     }



     function conslog(){
        let text = '{ ';
        if(add_total > 0){
            let textadd = '\n  "TableSubjectList": [';
            for (let i = 1; i <= add_total; i++) {
                let tmpstudentid = getParameterByName('id');
                //let tmpid = tmpstudentid;
                let yerartmp = document.getElementById(('subyear_'+i));
                let termtmp = document.getElementById(('subterm_'+i));
                let eduyeartmp = document.getElementById(('subeduyear_'+i));
                let idtmp = document.getElementById(('subid_'+i));
                let nametmp = document.getElementById(('subname_'+i));
                let sectmp = document.getElementById(('subsec_'+i));
                let datetmp = document.getElementById(('subdate_'+i));
                let nuaitmp = document.getElementById(('middate_'+i));
                let proftmp = document.getElementById(('finaldate_'+i));
                let tmp = '  \n    {\n\t'+'  "studentid": "'+tmpstudentid+'",\n\t  "year": "'+yerartmp.value+'",\n\t  "term": "'+termtmp.value+'",\n\t  "eduyear": "'+eduyeartmp.value+'",\n\t  "subjectCode": "'+idtmp.value+'",\n\t  "subjectName": "'+nametmp.value+'",\n\t  "subjectSection": "'+sectmp.value+'",\n\t  "subjectDate": "'+datetmp.value+'",\n\t  "middate": "'+nuaitmp.value+'",\n\t  "finaldate": "'+proftmp.value+'"\n    }';
                if(i < add_total){ tmp =tmp+',' }
               if(i == add_total) tmp =tmp+'\n  ]' ;
                
                textadd = textadd+tmp;
               
              }
              text = text+textadd;
        }
    
        text = text+'\n}';
      
      
        console.log(text);
        saveFile(text);
        
        
    }


     function saveFile(text){
        const xhttp = new XMLHttpRequest();
        xhttp.onload=function(){
            let msg = this.responseText;
            //alert(msg);
        };
        xhttp.open("POST","/saveStudent");
        xhttp.send(text);
        
        
            
     }



    


     function loadsubjecttableall0(){
         //alert("in");
         document.getElementById("addbut").remove();
         document.getElementById("minbut").remove();
         document.getElementById("submit").remove();
         document.getElementById("submit1").remove();
         if(tablecnt > 0 ){
             for (var remta = tablecnt;tablecnt > 0 ;remta--){
                 
             document.getElementById("addtable").deleteRow(remta);
             tablecnt--;}
         }
        
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
 
          //alert(count);
          let searchid = getParameterByName('id'); 
         // alert("search id" + searchid);
          //let searchid = '6309681689';
          let foundid;
          for (let li  = count-1;li>=0;li--){
             if(searchid == studentclass[li].TableSubjectList[0].studentid){
                 foundid = li;
                 break;
             }
             
          }
         //alert(foundid);
          
          
 
          var incount = 0;
          while (studentclass[foundid].TableSubjectList[incount]) {
             incount++;
         }
 
          
          //alert(incount);
          //alert(studentclass[0].TableSubjectList[0].subjectCode);
          //alert(studentclass[foundid].TableSubjectList[i].eduyear);
          //alert(studentclass[2].TableSubjectList[0].subjectCode);
          
          
             for (let i = 0 ;i<incount;i++){
                
             var table = document.getElementById("addtable");
         var row = table.insertRow();
         var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var cell6 = row.insertCell();
        var cell7 = row.insertCell();
        var cell8 = row.insertCell();
        var cell9 = row.insertCell();
        
    cell1.innerHTML = studentclass[foundid].TableSubjectList[i].year;
    cell2.innerHTML = studentclass[foundid].TableSubjectList[i].term;
    cell3.innerHTML = studentclass[foundid].TableSubjectList[i].eduyear;
    cell4.innerHTML = studentclass[foundid].TableSubjectList[i].subjectCode;
    cell5.innerHTML = studentclass[foundid].TableSubjectList[i].subjectName;
    cell6.innerHTML = studentclass[foundid].TableSubjectList[i].subjectSection;
    cell7.innerHTML = studentclass[foundid].TableSubjectList[i].subjectDate;
    cell8.innerHTML = studentclass[foundid].TableSubjectList[i].middate;
    cell9.innerHTML = studentclass[foundid].TableSubjectList[i].finaldate;
     tablecnt = tablecnt+1;}
          
     document.getElementById("addsub").innerHTML =tablecnt;

          
      }
          xhttp.open("GET","/getsubject_table");
          xhttp.send()
      
      
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

    function clickpay(){
        let tmpid = getParameterByName('id'); 
        window.location.replace ("/html/pay.html?id="+tmpid);
    }


    function clickadminsearchform(){
        window.location.replace ("/searchformadmin");
    }



    var tablecnt = 0;
    function loadsubjecttableall(){
      //  alert("in");
        
        if(tablecnt > 0 ){
            for (var remta = tablecnt;tablecnt > 0 ;remta--){  
            document.getElementById("showtable").deleteRow(remta);
            tablecnt--;}
        }
       
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
         let searchid = getParameterByName('id'); 
         //alert("search id" + searchid);
         //let searchid = '6309681689';
       


         //alert(studentclass[0].date);

         for (let li  = 0 ; li<count ;li++){

           if(searchid == studentclass[li].studentId  ){
             //  alert(1);
               var table = document.getElementById("showtable");
               var row = table.insertRow();
               var cell1 = row.insertCell();
               var cell2 = row.insertCell();
              var cell3 = row.insertCell();
              var cell4 = row.insertCell();
              var cell5 = row.insertCell();
              var cell6 = row.insertCell();
              var cell7 = row.insertCell();
              cell1.innerHTML = studentclass[li].subid;
              cell2.innerHTML = studentclass[li].subname ;
              cell3.innerHTML = studentclass[li].subsec;
               cell4.innerHTML = studentclass[li].sub_addORrem;
               if( studentclass[li].teacheradvisorcheck == false && studentclass[li].teachersubjectcheck == false   &&studentclass[li].authorcheck == false ){
                cell5.innerHTML = "รอตรวจสอบ";
               }
               else{

                if(studentclass[li].teacheradvisorapprove == true && studentclass[li].teachersubjectapprove == true && studentclass[li].authorapprove == true ){
                    cell5.innerHTML = "อนุมัติ";
                }
               else if((studentclass[li].teacheradvisorcheck == true && studentclass[li].teachersubjectcheck == true  )){
                    if( (studentclass[li].teacheradvisorapprove == false && studentclass[li].teachersubjectapprove == false )){
                        cell5.innerHTML = "ไม่อนุมัติ";
                    } 
                }
                else if( studentclass[li].teacheradvisorcheck == true && studentclass[li].teacheradvisorapprove == false){
                cell5.innerHTML = "อาจารย์ที่ปรึกษาไม่อนุมัติ รอการติดต่อจากอาจารย์";
               }
               else if(studentclass[li].teachersubjectcheck == true && studentclass[li].teachersubjectapprove == false){
                cell5.innerHTML = "อาจารย์ที่ปรึกษาไม่อนุมัติ รอการติดต่อจากอาจารย์";
               }
               else if(studentclass[li].authorcheck == true && studentclass[li].authorapprove == false){
                cell5.innerHTML = "เจ้าหน้าที่ไม่อนุมัติ รอการติดต่อจากเจ้าหน้าที่";
               }
                
            
                else{
                    cell5.innerHTML = "รอตรวจสอบ";
                }
               }
               cell6.innerHTML = '<center><a style="vertical-align:middle" href="/html/formedit.html?studentid='+studentclass[li].studentId+'&id='+studentclass[li].studentId+'&subject='+studentclass[li].subid+'" class="button"><span>แก้ไข</span></a><center>';
               cell7.innerHTML = '<center><a href="/html/formdelete.html?studentid='+studentclass[li].studentId+'&id='+studentclass[li].studentId+'&subject='+studentclass[li].subid+'" class="button2">ยกเลิก</a><center>';
               tablecnt = tablecnt+1;

// cell4.innerHTML = '<a href="/formapprove?studentid='+studentclass[li].studentId+'&subject='+studentclass[li].subid+'&role=advisor'+'" class="button">button &raquo;</a>';
             //  <td><center><button class="button" style="vertical-align:middle" onclick="document.location = 'แก้ไขข้อมูลนศ.html'"><span>แก้ไข </span></button></center></td>
    //<td><center><button class="button2">ยกเลิก</button></center></td>
           }
        
         }
      
//alert("end");
     }
         xhttp.open("GET","/getform");
         xhttp.send()
     
     
     }



     function findformtodelete(){
        //alert("in");
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
               let json1 = {}
               delete studentclass[li];
               studentclass[li] = json1;
              saveformafterdelete(studentclass);
              alert('ยกเลิกคำร้องเรียบร้อย');
              clickstatus();
             break;
            }     
          } 
      }
          xhttp.open("GET","/getform");
          xhttp.send()
     } 


     function saveformafterdelete(jsonstudent){
       // alert("in2");
        var myJSON = JSON.stringify(jsonstudent);
      //  alert(myJSON);
     const xhttp = new XMLHttpRequest();
     xhttp.onload = function(){
         let msg = this.responseText;
       //  alert(msg);
     };
     xhttp.open("POST", "/saveStudentformapprove");
     xhttp.send(myJSON);
     
        
     }


     function savecontactdata(){
        
        let tmpid = getParameterByName('id'); 
        //alert(tmpid);
            var json = {
                "studentFirstName":document.forms["Form"]["fname"].value,"studentLastName":document.forms["Form"]["lname"].value,
                 "studentId":tmpid ,"emal": document.forms["Form"]["email"].value,
                 "phone":document.forms["Form"]["phone"].value,"lineid": document.forms["Form"]["line"].value
        
            };
          
        //let text = '{"date": "'+n_date+'", "studentFirstName": "'+name+'", "studentLastName": "'+surname+'",  "studentId": "'+sid+'", "studentYear": '+syear+', "studyField": "'+field+'", "advisor": "'+advisor+'", "addressNumber": "'+address_num+'", "moo": "'+moo+'", "tumbol": "'+tumbol+'", "amphur": "'+amphur+'", "province": "'+province+'", "postCode": "'+postcode+'",  "mobilePhone": "'+mobilephone+'", "phone": "'+phone+'",  "cause": "'+cause+'",';
        //let tmp = '"addSubjectList": ['+'{'+'  "subjectCode": "'+idtmp.value+'","subjectName": "'+nametmp.value+'","subjectSection": "'+sectmp.value+'","subjectDate": "'+datetmp.value+'", "subjectCredit": "'+nuaitmp.value+'","subjectTeacher": "'+proftmp.value+'", "addorrem": '+addorrem.value+'   }';
                
        var myJSON = JSON.stringify(json);
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            let msg = this.responseText;
            alert("บันทึกเรียบร้อย");
            clickstudentmain();
            return false;
        
        };
        xhttp.open("POST", "/saveStudentcontactform");
        xhttp.send(myJSON);
         //return false;
        
     }

   


     


