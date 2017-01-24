function search(){
var key = document.form1.searchh.value;

if(key!=""){
localStorage.setItem("key",key);
location.href = "index.html#sResult";
}
}

function napravi(){
if(window.XMLHttpRequest){
xmlhttp = new XMLHttpRequest();
}
else{
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
alert("else");
}
xmlhttp.open("GET", "dolls.xml", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
xmlDoc = xmlhttp.responseXML;
prikazi(xmlDoc);
}
}
}

var pretraga = "";
function prikazi(xmlDoc){
var key = "";
key = localStorage.getItem("key");
if(key != null){
key = key.toLowerCase();
}
else{key="";}


var raspored = 1;
var svi = xmlDoc.getElementsByTagName('doll');
var mesto = document.getElementById('two');

for(var i = 0; i<svi.length;i++ ){


var title = svi[i].getElementsByTagName('title')[0].childNodes[0].nodeValue;
var headline = svi[i].getElementsByTagName('headline')[0].childNodes[0].nodeValue
var author = svi[i].getElementsByTagName('author')[0].childNodes[0].nodeValue;
var text = svi[i].getElementsByTagName('text')[0].childNodes[0].nodeValue;

if(headline.toLowerCase().indexOf(key)!=-1 || title.toLowerCase().indexOf(key)!=-1 || text.toLowerCase().indexOf(key)!=-1 || key==""){
if(raspored == 1){
var tekst = "<article><header><h2>"+title+"</h2><p>"+headline+"<a href='#author'>"+author+"</a></p></header><p>"+text+"</p></article>";
var pomocni = document.createElement('div');
pomocni.innerHTML = tekst;
mesto.insertBefore(pomocni,null);
}
else{
var tekst = "<article><header><h2>"+title+"</h2><p>"+headline+"<a href='#author'>"+author+"</a></p></header><p>"+text+"</p></article>";
var pomocni = document.createElement('div');
pomocni.innerHTML = tekst;
mesto.insertBefore(pomocni,null);
}
raspored*=-1;
}
}
localStorage.setItem("key","");
}