function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let id = getParameterByName("id") ; // get value from param 'id'

function loadDoc(){
	// find student by id and show student detail

	const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let json = this.responseText;
        console.log(json);
        console.log(id);

        try{
            let student = JSON.parse(json);

            for(let x in student){
                if(student[x].id == id){
                    document.getElementById("name").innerHTML = student[x].name;
                    document.getElementById("year").innerHTML = student[x].year;
                    document.getElementById("email").innerHTML = student[x].email;
                    document.getElementById("grade").innerHTML = student[x].grade;
                }
            }
           
        }catch(err){
            alert("Error!!!");
        }



        
    }
    xhttp.open("GET", "/getStudent");
    xhttp.send();
	
}
