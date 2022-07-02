function call(){
var person="<center>HELLO  "+name1.value;
var sex
 var dt = new Date();
dt.setHours( dt.getHours() + 2 );
dt=dt.toLocaleString('en-GB', { timeZone: 'UTC' });
if(mgen.checked){
	sex="male"
	}
else{
	sex="female"
	}


person+="<br><br>"+"<table border=1 cellspacing='0' cellpadding='40%'><caption> appointment detail</caption>"

person+="<tr><th>Name of patient </th><td>"+name1.value+"</td> <th> age/sex</th> <td>"+age.value+"/"+sex+"</td>"


person+="<tr><th>advised by </th><td>"+doctorname.value+"</td> <th>date</th> <td>"+date.value+"</td>"

person+="<tr><th>Investigation</th><td>"+Investigation.value+"</td><th> appointment time</th> <td>"+dt+"</td></table></center>"





result.innerHTML=person

}