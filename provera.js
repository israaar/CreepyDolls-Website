
/*provera*/
function Provera(){
	
	var imePrezime = document.getElementById('name');
	var email = document.getElementById('email');
	var korIme = document.getElementById('username');
	var sifra = document.getElementById('password');
	var pSifra = document.getElementById('confirm');
	var status = document.getElementById('ddlstatus');
	var pol = document.getElementsByName('rbGender');
	
	
	var regImePrezime = /^[A-Z]{1}[a-z]{2,19}\s[A-Z]{1}[a-z]{3,29}$/;
	var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var regKorIme = /^[a-z0-9\_]+$/;
	var regLoz = /^[\w]{5,10}$/;
	
	var podaci = new Array();
	var greske = new Array();
	
		
	
	if(!imePrezime.value.match(regImePrezime)){
		

		
		imePrezime.style.borderColor = "#ff7372";
		greske.push("Full name must start with capital letter!");
	}
	
	if(!email.value.match(regEmail)){
		
		
		email.style.borderColor = "#ff7372";
		greske.push("Email is not in good format!");
	}
		
	if(!korIme.value.match(regKorIme)){
		
		korIme.style.borderColor = "#ff7372";
		greske.push("Username is not in good format!");
	}
	
		
	if(!sifra.value.match(regLoz)){
		
		sifra.style.borderColor = "#ff7372";
		greske.push("Password is not in good format!");
	}
	
		if(!pSifra.value.match(regLoz)){
		
	
		
		pSifra.style.borderColor = "#ff7372";
		
	}
	
	 if(sifra.value!=pSifra.value){
             sifra.style.borderColor="#ff7372";
			 pSifra.style.borderColor="#ff7372";
			 greske.push("Passwords do not match!");
           }
	
	    var genderOk=false;
           var rbGender="";
           for(var i=0; i<pol.length; i++){
             if(pol[i].checked){
               genderOk=true;
               rbGender=pol[i].value;
			   podaci.push(rbGender);
               break;
             }
           }
           if(!rbGender){
             greske.push("Choose your gender!");
           }
		   
		    if(status.selectedIndex==0){
               status.style.borderColor="#ff7372";
			   greske.push("Choose one!")
		   }
		   
		 if(greske.length>0){
              greskeLista="";
              for(var i=0; i<greske.length; i++){
                 greskeLista+=greske[i]+"\n ";
              }
		 alert(greskeLista);}
		 
		 else{
		 
              var poruka = "<ul><li><i>Name: </i>" + imePrezime.value+"</li>";
              poruka += "<li><i>Username: </i>" + korIme.value+"</li>";
              poruka += "<li><i>E-mail: </i>" + email.value+"</li>";
              poruka += "<li><i>Password: </i>" + sifra.value+"</li>";
              poruka += "<li><i>Gender: </i>" +pol.value+"</li>";
              poruka += "<li><i>Status: </i>" + status.value+"</li>";
             
		   
		   poruka+="</ul>";
		    document.getElementById("write").innerHTML+=poruka;
           
           }
		 
		   
}

/*login*/

function proveraUsr()
{
var mail = document.getElementById('lgEmail');
var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!mail.value.match(regEmail))
{
mail.style.border = "1px solid #f77";
mail.value="";
return true;
}

else
{
mail.style.border = "";
return false;
}
}

function proveraPsw()
{
var sifra = document.getElementById('lgPswd');
var regSifra = /^[\w]{5,10}$/;
if(!sifra.value.match(regSifra))
{
sifra.style.border = "1px solid #f77";
sifra.value="";
return true;
}

else
{
sifra.style.border = "";
return false;
}
}

/*login*/

function prijavise()
{
var mail = document.getElementById('lgEmail').value;

var sifra = document.getElementById('lgPswd').value;
var x = proveraUsr();
var y = proveraPsw();
if(x || y) alert("Enter username and password to login!");
else alert("Welcome!");
}



/*Slanje poruke*/

function proveraIme()
{
var ime = document.getElementById('uName');
var upozorenje = document.getElementById('sName');
var regIme = /^[A-Z]{1}[a-z]{2,25}$/;
if(!ime.value.match(regIme))
{
ime.style.border = "1px solid #ff7372";
upozorenje.innerHTML = "Wrong format of name! Must begin with capital letter!";
return true;
}
else
{
ime.style.border = "";
upozorenje.innerHTML = "";
return false;
}}

function proveraEmail()
{
var email = document.getElementById('eMail');
var upozorenje = document.getElementById('sEmail');
var regEmail = /^[a-z \d]+((\.|\_|\-)?[\w \d]+)?@\w+\.(\w+\.)?\w{2,3}$/;
if(!email.value.match(regEmail))
{
email.style.border = "1px solid #ff7372";
upozorenje.innerHTML = "Email format must be like: example@something.com";
return true;
}
else
{
email.style.border = "";
upozorenje.innerHTML = "";
return false;
}}

function proveraPoruka()
{
var poruka = document.getElementById('comments');
var upozorenje = document.getElementById('sComments');
var regPoruka = /^[A-Z]{1}\w+(\s?(\w|\d)+(\.|\?|\!)?)*$/;
if(!poruka.value.match(regPoruka))
{
poruka.style.border = "1px solid f77";
upozorenje.innerHTML = "Wrong format of message! Must begin with capital letter!";
return true;
}
else
{
poruka.style.border = "";
upozorenje.innerHTML = "";
return false;
}
}


function slanje()
{
var ime = document.getElementById('uName').value;
var email = document.getElementById('eMail').value;
var poruka = document.getElementById('comments').value;
var divIspis = document.getElementById('ispis');
var ispisi = "<ul>";
var x = proveraIme();
var y = proveraEmail();
var b = proveraPoruka();
if(x || y || b)
{
ispisi += "<li>Please make sure all required fields are filled out correctly.</li></ul>";
divIspis.innerHTML= ispisi;
}
else
	{
divIspis.innerHTML = "";		
	
location = "mailto:marija.lekic.132.13@ict.edu.rs?subject=Message&body="+poruka;

ispisi += "<li>Your name is: " +ime+ "</li>";
ispisi += "<li>Your e-mail is: " +email+ "</li>";
ispisi += "<li>Message: " +poruka+ "</li></ul>";
divIspis.innerHTML= ispisi;
}
}


