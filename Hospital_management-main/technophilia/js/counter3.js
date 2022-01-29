// a function returns the element by its id
function $(id){
  return document.getElementById(id);
}
// initialize GUI
window.onload = function(){
  $('counter_scr').value = 0;
}
// counter variable
let counter3 = 0;
// update textbox
function UpdateCounterScr3(){
  $('counter_scr3').value = counter3;
}
// increment operation
$('increment3').addEventListener('click',function(){
  counter3++;
  if(counter3 >= 10){
      counter3 = 10;
  }
  UpdateCounterScr3();
});

// decrement operation
$('decrement3').addEventListener('click',function(){
  counter3--;
  if(counter3 <= 0){
      counter3 = 0;
  }
  UpdateCounterScr3();
});
// a function returns the element by its id
