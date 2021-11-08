document.getElementById("para1").innerHTML = formatAMPM();
function formatAMPM() {
    
var d = new Date();
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
return ' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' ';
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
    
    cell1.innerHTML = '<input type="text" size="3" maxlength="1"id="subjyear_'+add_total+'"'+'name="subjyear_'+add_total+'" required>';
    cell2.innerHTML = '<input type="text" size="3" maxlength="1"id="subjterm_'+add_total+'"'+'name="subjterm_'+add_total+'" required>';
    cell3.innerHTML = '<input type="text" size="4" maxlength="4"id="subjedyear_'+add_total+'"'+'name="subjedyear_'+add_total+'" required>';
    cell4.innerHTML = '<input type="text" size="5" maxlength="5"id="subjid_'+add_total+'"'+'name="subjid_'+add_total+'" required>';
    cell5.innerHTML = '<input type="text" size="25" id="subjname_'+add_total+'"'+'name="subjname_'+add_total+'" required>';
    cell6.innerHTML = '<input type="text" size="6" maxlength="6" id="subjsect_'+add_total+'"'+'name="subjsect_'+add_total+'" required>';
    cell7.innerHTML = '<input type="text" size="6" id="subjgra_'+add_total+'"'+'name="subjgra_'+add_total+'" required>';
   
    document.getElementById('addsub').innerHTML = add_total;
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
        let yeartmp = document.getElementById(('subjyear_'+i));
        let termtmp = document.getElementById(('subjterm_'+i));
        let eduyeartmp = document.getElementById(('subjedyear_'+i));
        let secttmp = document.getElementById(('subjsect_'+i));
        let gratmp = document.getElementById(('subjgra_'+i));
        
        if(isNaN(yeartmp.value)==true){
            alert("กรุณากรอกชั้นปีให้ถูกต้องซึ่งเป็นตัวเลขหนึ่งตัว เช่น:1");
            return false;
        }if(isNaN(termtmp.value)==true){
            alert("กรุณากรอกเทอมให้ถูกต้องซึ่งเป็นตัวเลขหนึ่งตัว เช่น:2");
            return false;
        }if(isNaN(eduyeartmp.value)==true){
            alert("กรุณากรอกปีการศึกษาให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:2564");
            return false;
        }if(isNaN(secttmp.value)==true){
            alert("กรุณากรอก section ให้ถูกต้องซึ่งเป็นตัวเลขทั้งหมด เช่น:010001");
            return false;
        }
                        

        if((yeartmp.value)>7||(yerartmp.value)<1){
            alert("กรุณากรอกชั้นปีให้ถูกต้องซึ่งเป็นตัวเลขที่อยู่ในช่วง 1-7 เช่น 1");
            return false;
            }if((termtmp.value)>2||(termtmp.value)<1){
            alert("กรุณากรอกเทอมให้ถูกต้อง เช่น 1 หรือ 2");
            return false;
                }if((eduyeartmp.value)>3000 || (eduyeartmp.value)<2500){
                    alert("กรุณากรอกชั้นปีให้ถูกต้องซึ่งเป็นปีพศ.เช่น 2564");
                    return false;
                    }
        }



    alert("บันทึกข้อมูลเรียบร้อย");
    conslog()
    return false; //  preventing page refreshing when submit  
    }
}


function conslog(){
    let text = '{ ';
    if(add_total > 0){
        let textadd = '\n  "TableSubjectList": [';
        for (let i = 1; i <= add_total; i++) {
            let yeartmp = document.getElementById(('subjyear_'+i));
            let termtmp = document.getElementById(('subjterm_'+i));
            let edyeartmp = document.getElementById(('subjedyear_'+i));
            let idtmp = document.getElementById(('subjid_'+i));
            let nametmp = document.getElementById(('subjname_'+i));
            let secttmp = document.getElementById(('subjsect_'+i));
            let gradtmp = document.getElementById(('subjgra_'+i));
            let tmp = '  \n    {\n\t'+'  "year": "'+yeartmp.value+'",\n\t  "term": "'+termtmp.value+'",\n\t  "eduyear": "'+edyeartmp.value+'",\n\t  "subjectCode": "'+idtmp.value+'",\n\t  "subjectName": "'+nametmp.value+'",\n\t  "subjectSection": "'+secttmp.value+'",\n\t  "subjectGrade": "'+gradtmp.value+'",\n    }';
            if(i < add_total){ tmp =tmp+',' }
           if(i == add_total) tmp =tmp+'\n  ]' ;
            
            textadd = textadd+tmp;
           
          }
          text = text+textadd;
    }

    text = text+'\n}';
    console.log(text);
    
}