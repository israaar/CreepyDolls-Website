
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
	
		
	
	if(imePrezime.value.match(regImePrezime)){
		
		podaci.push(imePrezime);
	}
	
	else{
		
		imePrezime.style.borderColor = "#ff7372";
		greske.push("Full name must start with capital letter!");
	}
	
	if(email.value.match(regEmail)){
		
		podaci.push(email);
	}
	
	else{
		
		email.style.borderColor = "#ff7372";
		greske.push("Email is not in good format!");
	}
		
	if(korIme.value.match(regKorIme)){
		
		podaci.push(korIme);
	}
	
	else{
		
		korIme.style.borderColor = "#ff7372";
		greske.push("Username is not in good format!");
	}
	
		
	if(sifra.value.match(regLoz)){
		
		podaci.push(sifra);
	}
	
	else{
		
		sifra.style.borderColor = "#ff7372";
		greske.push("Password is not in good format!");
	}
	
		if(pSifra.value.match(regLoz)){
		
		podaci.push(pSifra);
	}
	
	else{
		
		pSifra.style.borderColor = "#ff7372";
		greske.push("Password is not in good format!");
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
           }
		   
		   else {
			   
			   podaci.push.status.selectedIndex.value;
		   }
		   
		  if(podaci.length>0){
			  
			  podaciLista="";
			    for(var i=0; i<podaci.length; i++){
				 var podaciLista = "";
                 podaciLista+=podaci[i]+"\n ";
              }
			  
		  }
			  
			   if(greske.length>0){
              greskeLista="";
              for(var i=0; i<greske.length; i++){
                 greskeLista+=greske[i]+"\n ";
              }
              alert(greskeLista);
			  
			  document.getElementById("write").innerHTML+=podaciLista;
		   
}}

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
function prijavise()
{
var mail = document.getElementById('lgEmail').value;

var sifra = document.getElementById('lgPswd').value;
var x = proveraUsr();
var y = proveraPsw();
if(x || y) alert("Enter username and password to login!");
else alert("Welcome!");
}

/*slide*/

function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);
      $active.fadeOut(1500,function(){
	  $active.css('z-index',1).show().removeClass('active');
          $next.css('z-index',3).addClass('active');
      });
    }

$(document).ready(function(){

setInterval('cycleImages()', 5000);
});

/*scroll*/

$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip();
  

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {


    if (this.hash !== "") {


      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        window.location.hash = hash;
      });
    } 
  });
})

/*Slanje poruke*/

function proveraIme()
{
var ime = document.getElementById('name');
var upozorenje = document.getElementById('sName');
var regIme = /^[A-Z]{1}[a-z]{2,25}$/;
if(!ime.value.match(regIme))
{
ime.style.border = "1px solid #ff7372";
upozorenje.innerHTML = ' <span style = "color : #3D0C02;">Name must begin with capital
letter and contain between 3 and 25 characters!</span>';
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
var email = document.getElementById('email');
var upozorenje = document.getElementById('sEmail');
var regEmail = /^[a-z \d]+((\.|\_|\-)?[\w \d]+)?@\w+\.
(\w+\.)?\w{2,3}$/;
if(!email.value.match(regEmail))
{
email.style.border = "1px solid #ff7372";
upozorenje.innerHTML = ' <span style = "color : #3D0C02;">Email
format must be like: example@something.com</span>';
return true;
}
else
{
email.style.border = "";
upozorenje.innerHTML = "";
return false;
}}


function slanje()
{
var ime = document.getElementById('name').value;
var email = document.getElementById('email').value;
var poruka = document.getElementById('comments').value;
var divIspis = document.getElementById('write');
var ispisi = "<ul>";
var x = proveraIme();
var y = proveraEmail();
var b = proveraPoruka();
if(x || y || z || b)
{
ispisi += "<li>Please make sure all required fields are filled out correctly.</li></ul>";
divIspis.innerHTML= ispisi;
}
else
	{
		
		
location = "mailto:marija.lekic.132.13@ict.edu.rs?subject=Message&body="+poruka;

ispisi += "<li>Your name is: " +ime+ "</li>";
ispisi += "<li>Your e-mail is: " +email+ "</li>";
ispisi += "<li>Message: </li>" +poruka+ "</ul>";
divIspis.innerHTML= ispisi;
}
}


