/*
   var todayDate = new Date();
   var month = todayDate.getMonth()+ 1; 
   var year = todayDate.getUTCFullYear() - 0; 
   var tdate = todayDate.getDate(); 
   if(month < 10){
     month = "0" + month 
   }
   if(tdate < 10){
     tdate = "0" + tdate;
   }
   var maxDate = year + "-" + month + "-" + tdate;
   document.getElementById("demo").setAttribute("min", maxDate);
   console.log(maxDate);
   console.log(document.getElementById("demo"))
   console.log(document.getElementById("demo").setAttribute("min", maxDate))

*/



  var startDate = document.getElementById('start-date'),
  startTime = document.getElementById('start'),
  duration = document.getElementById('duration-select'),
  selectedDuration = getSelectedOption(duration).text,
  finishDateAndTime = document.getElementById('end')
  deleteButton = document.querySelector('.delete')

  //disabling the previous date picker 

    
      
      
      
console.log(startDate.value)
  //var m = moment(`${startDate.value}:${startTime.value}`)
  //console.log(m.toString())
  //var m2 = moment(`${startDate.value}:${startTime.value}`)






//


document.getElementById('form').addEventListener('submit',function(e) {


setTimeout(calculateFinishTime, 1000)


    e.preventDefault();

})

function getSelectedOption(select) {
    var opt;
    for ( var i = 0, len = select.options.length; i < len; i++ ) {
        option = select.options[i];
        if ( option.selected === true ) {
            break;
        }
    }
    return option;
    
}

console.log()

function calculateFinishTime() {
    var startDate = document.getElementById('start-date'),
     startTime = document.getElementById('start'),
     duration = document.getElementById('duration-select'),
     selectedDuration = getSelectedOption(duration).text,
     finishDateAndTime = document.getElementById('end')
     finishDate = document.getElementById('end-date')
     finishTime = document.getElementById('end-time')
     

   let m = new Date(`${startDate.value}:${startTime.value}`)
  
   console.log(m.toString())
  
    

   //moment =  m(`${startDate.value}:${startTime.value}`)
  

  
   

  
   //var m2 = m.setHours(m.getHours() + selectedDuration)

   var m2 = m.setTime(m.getTime() + (selectedDuration * 60 * 60 * 1000))
   m3 = new Date(m2)
   console.log(m3.toString())
  
   var NewMonth;

  if (m3.getMonth() < 10){
       NewMonth = ('0'+ (m3.getMonth() + 1))
   }else{
       NewMonth = (m3.getMonth() + 1)
   }
 
   var NewDate;

   if (m3.getDate() < 10){
       NewDate = '0'+ m3.getDate()
   }else{
       NewDate = m3.getDate()
   }
 
   
   var newYear = m3.getFullYear()

   var newHours = m3.getHours()
   var newMinutes;

   if (m3.getMinutes() < 10) {
       newMinutes = '0' + m3.getMinutes()

   }else{
       newMinutes =m3.getMinutes()
   }

   console.log(NewDate)
   console.log(NewMonth)

   // var m2 = m.add(selectedDuration,'minutes')// need to change this to hours

   console.log(newYear, NewMonth, NewDate)
    finishDate.value = (`${newYear}-${NewMonth}-${NewDate}`)
    finishTime.value = (`${newHours}:${newMinutes}`)

    
    addFastToList(startDate.value,startTime.value, selectedDuration, finishDate.value, finishTime.value)
    
  
   
    
   
   // getFastFromLocalStorage()
    
}


function addFastToList(startdate, starttime, duration, enddate, endtime){
    var startdate

    const list = document.getElementById('individual-fasts')
    const row = document.createElement('tr')
    row.innerHTML = `<td >${startdate}</td>
                         <td>${starttime}</td>
                         <td>${duration}</td>
                         <td>${enddate}</td>
                         <td >${endtime}</td>
                         <td class = 'delete'>X</td>`

                         list.appendChild(row)
                         console.log()


                         //var fastperiod = {'start-date/time':m,'duration':selectedDuration, 'end-date/time':m2 }

                         storeFastInLocalStorage(startdate, starttime, duration, enddate, endtime)    
                         //getFastFromLocalStorage(m,selectedDuration,m2)

                         setTimeout(clearFields, 2000)

}


function clearFields (){
    startDate.value = ''
    startTime.value = ''
    finishTime.value =''
    finishDate.value = ''
    duration.value = ''

}



function storeFastInLocalStorage(startdate, starttime, duration, enddate, endtime){
    
    fastperiod = [startdate, starttime, duration, enddate, endtime]
    
    let fasts;
    if(localStorage.getItem('fasts') === null){
        fasts = []
    }else{
        fasts = JSON.parse(localStorage.getItem('fasts'))
    }

        fasts.push(fastperiod)

        localStorage.setItem('fasts', JSON.stringify(fasts))
        
       
}

function getFastFromLocalStorage(){
 
    let fasts;
    if(localStorage.getItem('fasts')=== null){
        fasts =[]
    }
    else{
        fasts = JSON.parse(localStorage.getItem('fasts'))
    }
    fasts.forEach(function(fast){
        const list = document.getElementById('individual-fasts')
        const row = document.createElement('tr')
        row.innerHTML = `<td>${fast[0]}</td>
        <td>${fast[1]}</td>
        <td>${fast[2]}</td>
        <td>${fast[3]}</td>
        <td>${fast[4]}</td>
        <td class  = 'delete'>X</td>`

                         list.appendChild(row)
                        
                        
                         

    })
   

}










document.addEventListener('DOMContentLoaded', getFastFromLocalStorage)
var deleteFastRecord = document.querySelector('.fast-records')
deleteFastRecord.addEventListener('click', onDeleteRow)


function onDeleteRow(e){
    if(! e.target.classList.contains('delete'))
    {
       return
    }
  const btn = e.target;
  btn.closest('tr').remove()

  removeFastPeriodFromLocalStorage()
   

}


function removeFastPeriodFromLocalStorage(fastperiod){
    let fasts ;
     if(localStorage.getItem('fasts') === null){
         fasts = []

     }else{
         fasts = JSON.parse(localStorage.getItem('fasts'));
        }

    fasts.forEach(function(fast, index){
        if(fastperiod === fastperiod){
            fasts.splice(index,1);
        }
    })
      localStorage.setItem('fasts', JSON.stringify(fasts));
    }