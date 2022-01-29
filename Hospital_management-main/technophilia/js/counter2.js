// a function returns the element by its id
function $(id){
  return document.getElementById(id);
}
// initialize GUI
window.onload = function(){
  $('counter_scr2').value = 0;
}
// counter variable
let counter2 = 0;
// update textbox
function UpdateCounterScr2(){
  $('counter_scr2').value = counter2;
}
// increment operation
$('increment2').addEventListener('click',function(){
  counter2++;
  if(counter2 >= 10){
      counter2 = 10;
  }
  UpdateCounterScr2();
});

// decrement operation
$('decrement2').addEventListener('click',function(){
  counter2--;
  if(counter2 <= 0){
      counter2 = 0;
  }
  UpdateCounterScr2();
});
// a function returns the element by its id
