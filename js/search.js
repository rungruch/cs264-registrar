function search(){
	var inid = document.getElementById("studentid").value;
	var inname = document.getElementById("studentname").value;
	// set url to search from input
    let targetUrl = window.location.pathname;
    let query = '';
    if(inid){
        query += '&id='+inid;
    }
    if(inname){
        query += '&name='+inname;
    }
    if(query){
        query = query.replace("&","?");
        window.location.href = targetUrl+query;
    }else{
        alert("please type something")
        return;
    }
    
    window.location.replace ("/html/student-main.html?id="+inid) ;
    
//alert(inid);
//alert(inname);
//urltest();
}

function getParameterByName(name, url = window.location.href) {
   name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function nextpage(){


}


