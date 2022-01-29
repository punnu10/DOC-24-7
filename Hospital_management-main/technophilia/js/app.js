/*Passsword check*/
var pwd="123456";
function passcheck(){
  if(document.getElementById('password').value==''){
    alert('Enter password');
    return false;
   }
   else{
  if(document.getElementById('password').value!=pwd){
    alert('Wrong Password...Try Again.');
    return false;
  }
}
  if(document.getElementById('password').value==pwd){
    alert('Correct password.Click OK to enter User Dashboard');
  }
}
function addItem()
{
  alert('Item added to your cart');
}
/*
let pin="153245"; 
 function pincheck()
{
  if(document.getElementById('pincode').value==pin)
  {
     alert('*Service is available');
  }
}
*/

/*Navbar*/
const toggleBtn = document.querySelector(".menu-btn")
const sidebar = document.querySelector(".nav-links")

toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar")
})
