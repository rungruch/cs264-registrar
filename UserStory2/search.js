function search(){
	let searchName = document.getElementById("searchName").value;
	let searchYear = parseInt(document.getElementById("searchYear").value);
	// set url to search from input
	let targetURL = window.location.pathname;
	let query = '';
	if(searchName){
		query += '&name=' + searchName;
	}
	if(searchYear){
		query += '&year=' + searchYear;
	}
	if (query) {
		query = query.replace("&", "?");
		window.location.href = targetURL+query;
	}
	else{
		alert("sorry couldn't find that");
	}
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let name = getParameterByName('name'); // get value from param 'name'
let year = getParameterByName('year'); // get value from param 'year'



function loadDoc(){
	// search student by name and year param and set hyperlink to info of student
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function(){
		let json = this.responseText;

		let tmp = "";
		let results = [];
		let id = [];
		try{
			let student = JSON.parse(json);
			console.log(json);
			console.log(name);
			var regex = new RegExp(name+"([^\"&#]*)","ig");

			for (let x in student){
				tmp = student[x].name;
				console.log(tmp.match(regex));
				if(tmp.match(regex) != null || student[x].year == year){
					results.push(tmp);
					id.push(student[x].id);
				}
				
			}
			let studentList = document.getElementById("studentList");
	    	for(let x in results){
	    		let p = document.createElement("a");
	    		let br = document.createElement("br");
	    		p.href = "http://localhost:8080"+"/info?id="+id[x] ;
	    		p.innerHTML = results[x];
	    		studentList.appendChild(p);
	    		studentList.appendChild(br);
	    	}
        
	        console.log(results);
	        console.log("find name work");
	        console.log(window.location.href);
    	}catch(err){
    		alert("Error!!!");
    	}



		
	}
	xhttp.open("GET", "/getStudent");
	xhttp.send();
	
}
