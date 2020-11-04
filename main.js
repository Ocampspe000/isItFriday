const today = new Date();


function checkForFriday(day){
if(day.getDay() === 5){
  document.querySelector('#answer').innerHTML = 'YES!';
} else {
  document.querySelector('#answer').innerHTML = 'NO :(';
}

}//end of check for friday

checkForFriday(today)
