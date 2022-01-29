function $(id){
  return document.getElementById(id);
}
// initialize GUI
window.onload = function(){
  $('counter_scr1').value = 0;
}
// counter variable
let counter1 = 0;
// update textbox
function UpdateCounterScr1(){
  $('counter_scr1').value = counter1;
}
// increment operation
$('increment1').addEventListener('click',function(){
  counter1++;
  if(counter1 >= 10){
      counter1 = 10;
  }
  UpdateCounterScr1();
});

// decrement operation
$('decrement1').addEventListener('click',function(){
  counter1--;
  if(counter1 <= 0){
      counter1 = 0;
  }
  UpdateCounterScr1();
});

