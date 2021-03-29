let list = document.getElementsByClassName('step');
let menu = document.getElementsByClassName('tab');
let two = document.getElementsByClassName('twoo')
let four = document.getElementsByClassName('sri')
// let backBtn = document.getElementById('prevBtn')
menu[0].style.display = 'block';
list[0].style.background = 'green';

function backTab() {
  if(list[1].style.background != 'green') {
    list[0].style.background = 'green';
    menu[0].style.display = 'block';
  } 
  if(list[0].style.background = 'green' && list[1].style.background == 'green' && list[2].style.background != 'green' && list[3].style.background != 'green') {
    list[1].style.background = '#bbbbbb';
    two[0].style.display = 'none';
    menu[0].style.display = 'block';
  }
  if(list[0].style.background = 'green' && list[1].style.background == 'green' && list[2].style.background == 'green' && list[3].style.background != 'green') {
    four[0].style.display = 'none';
    menu[1].style.display = 'block';
    two[0].style.display = 'block';
    list[2].style.background = '#bbbbbb';
    
  }
  if(list[0].style.background = 'green' && list[1].style.background == 'green' && list[2].style.background == 'green' && list[3].style.background == 'green') {
    list[3].style.background = '#bbbbbb';
    menu[3].style.display = 'none';
    menu[2].style.display = 'block';
    four[0].style.display ='block';
  }
  
}

function nextTab() {
  if(list[0].style.background == 'green' && list[1].style.background == 'green' && list[2].style.background == 'green') {
    four[0].style.display = 'none';
    list[3].style.background = 'green';
    menu[2].style.display = 'none';
    menu[3].style.display = 'block';
  }
  if(list[0].style.background = 'green' && list[1].style.background == 'green' && list[3].style.background != 'green' ) {
    two[0].style.display = 'none';
    list[2].style.background = 'green';
    menu[2].style.display = 'block';
    four[0].style.display ='block';
  }
  if(list[0].style.background == 'green' && list[2].style.background !== 'green') {
    list[1].style.background = 'green';
    menu[1].style.display = 'block';
    two[0].style.display = 'block';
    menu[2].style.display = 'none';
    menu[0].style.display = 'none';
  }
  if(list[0].style.background != 'green' || list[1].style.background == '#bbbbbb' || list[1].style.background != 'green') {
    list[0].style.background = 'green';
    menu[0].style.display = 'block';
  } 

}