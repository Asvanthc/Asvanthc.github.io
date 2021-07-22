const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function validate() {
var form = document.getElementById("myForm").elements;
for(var i=0;i<form.length;i++)
{   if(form[i].value=="")
   {alert("No blank values are allowed");
     return false;
   } 
   else{
     return true;
   }
}
}