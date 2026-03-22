let f=document.getElementById("f");

f.onsubmit=function(e){
e.preventDefault();

let valid=true;

let name=document.getElementById("name");
let email=document.getElementById("email");
let mobile=document.getElementById("mobile");
let dept=document.getElementById("dept");
let fb=document.getElementById("fb");

// Name
if(name.value.trim()==""){
document.getElementById("nmsg").textContent="Enter name";
valid=false;
}else document.getElementById("nmsg").textContent="";

// Email
if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value)){
document.getElementById("emsg").textContent="Invalid email";
valid=false;
}else document.getElementById("emsg").textContent="";

// Mobile
if(!/^[0-9]{10}$/.test(mobile.value)){
document.getElementById("mmsg").textContent="Enter valid 10 digit mobile number";
valid=false;
}else document.getElementById("mmsg").textContent="";

// Department
if(dept.value==""){
document.getElementById("dmsg").textContent="Select department";
valid=false;
}else document.getElementById("dmsg").textContent="";

// Gender
let g=document.getElementsByName("g");
let selected=false;
for(let i of g){ if(i.checked) selected=true; }

if(!selected){
document.getElementById("gmsg").textContent="Select gender";
valid=false;
}else document.getElementById("gmsg").textContent="";

// Feedback
let words=fb.value.trim().split(/\s+/);
if(fb.value.trim()=="" || words.length<10){
document.getElementById("fmsg").textContent="Minimum 10 words required";
valid=false;
}else document.getElementById("fmsg").textContent="";

if(valid){
document.getElementById("ok").textContent="Feedback submitted successfully!";
f.reset();
}
}

// reset
f.onreset=function(){
document.querySelectorAll("p").forEach(x=>x.textContent="");
document.getElementById("ok").textContent="";
}