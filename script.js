// your code here
function fun()
{
	var name=document.getElementById("name").value;
	var year=document.getElementById("year").value;
    if(name != "" && year != "")
	    document.getElementById("url").innerHTML=`https://localhost:8080/?name=${name}&year=${year}`
    else if(name != "")
	    document.getElementById("url").innerHTML=`https://localhost:8080/?name=${name}`
    else if(year != "")
	    document.getElementById("url").innerHTML=`https://localhost:8080/?year=${year}`
    else
        document.getElementById("url").innerHTML=`https://localhost:8080/`
}