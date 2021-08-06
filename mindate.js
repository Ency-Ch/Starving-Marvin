var todayDate = new Date();
var month = todayDate.getMonth()+ 1; 
var year = todayDate.getUTCFullYear() - 0; 
var tdate = todayDate.getDate(); 

var timeinHours = todayDate.getHours();
var timeinMinutes = todayDate.getMinutes();

if(month < 10){
  month = "0" + month 
}
if(tdate < 10){
  tdate = "0" + tdate;
}
var minDate = year + "-" + month + "-" + tdate;
//var minTime = `${timeinHours}:${timeinMinutes}`;
document.getElementById("start-date").setAttribute("min", minDate);

//document.getElementById('start').setAttribute('min', minTime);
/*
if (fasts.length >= 5) {
        
  var maxFastPeriods =  document.getElementById('validationalert')
   maxFastPeriods.innerHTML = 'you can only store 5 fast periods'
  setTimeout(clearValidationParagraph, 3000)

   function clearValidationParagraph (){
     maxFastPeriods.innerHTML = ''}
     

}else{*/