



  var startDate = document.getElementById('start-date'),
  startTime = document.getElementById('start'),
  duration = document.getElementById('duration-select'),
  selectedDuration = getSelectedOption(duration).text,
  finishDateAndTime = document.getElementById('end'),
  deleteButton = document.querySelector('.delete'),
  validationpara = document.getElementById('validationalert')

 

    
      
      


document.getElementById('form').addEventListener('submit',function(e) {

  
    calculateFinishTime()

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



function calculateFinishTime() {

    var startDate = document.getElementById('start-date'),
    startTime = document.getElementById('start'),
    duration = document.getElementById('duration-select'),
    selectedDuration = getSelectedOption(duration).text,
    finishDateAndTime = document.getElementById('end')
    finishDate = document.getElementById('end-date')
    finishTime = document.getElementById('end-time')

    if(startDate.value === '' || startTime.value === ''|| selectedDuration === 'choose fasting duration'){
        var validationpara = document.getElementById('validationalert')
       validationpara.innerHTML = 'please enter valid start dates, times or duration'

       setTimeout(clearValidationParagraph, 3000)

       console.log(startDate.value)

      

       function clearValidationParagraph (){
           validationpara.innerHTML = ''}
        



    }else{
    
    

  let m = new Date(`${startDate.value}:${startTime.value}`)

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

  if (m3.getHours() < 10){
      newHours = '0' + m3.getHours()

  }else{
      newHours = m3.getHours()
  }



  var newMinutes;

  if (m3.getMinutes() < 10) {
      newMinutes = '0' + m3.getMinutes()

  }else{
      newMinutes =m3.getMinutes()
  }

  

 

  console.log(newYear, NewMonth, NewDate)
   finishDate.value = (`${newYear}-${NewMonth}-${NewDate}`)
   finishTime.value = (`${newHours}:${newMinutes}`)
  
   console.log(finishTime.value)
  
   addFastToList(startDate.value,startTime.value, selectedDuration, finishDate.value, finishTime.value)
   //getFastFromLocalStorage()
}
            
            //getFastFromLocalStorage()

    }
    

    
   
    
  
   
    

    



function addFastToList(startdate, starttime, duration, enddate, endtime){




    const list = document.getElementById('individual-fasts')
    const row = document.createElement('tr')

    if (totalNumberOfRows >=5 ){
        return

    }else{
        row.innerHTML = `<td >${startdate}</td>
                         <td>${starttime}</td>
                         <td>${duration}</td>
                         <td>${enddate}</td>
                         <td >${endtime}</td>
                         <td class = 'delete'>X</td>`

                         list.appendChild(row)

    }
   
    
                         
                       var totalNumberOfRows = CountRows()
                       console.log(totalNumberOfRows)
                        

                         function CountRows() {
                            var totalRowCount = 0;
                            var rowCount = 0;
                            var table = document.getElementById("individual-fasts");
                            var rows = table.getElementsByTagName("tr")
                            for (var i = 0; i < rows.length; i++) {
                                totalRowCount++;
                                if (rows[i].getElementsByTagName("td").length > 0) {
                                    rowCount++;
                                }
                            }
                           return totalRowCount
                        }


                        

                         storeFastInLocalStorage(startdate, starttime, duration, enddate, endtime)    
                    

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

    if (fasts.length >= 5) {
    

           var validationpara = document.getElementById('validationalert')
           validationpara.innerHTML = 'a maximum of 5 fasts periods are allowed'
    
           setTimeout(clearValidationParagraph, 3000)
    
           console.log(startDate.value)
    
          
    
           function clearValidationParagraph (){
               validationpara.innerHTML = ''}


        return fasts   
        
        
       
 
    }else{
        fasts.push(fastperiod)

        localStorage.setItem('fasts', JSON.stringify(fasts))
        console.log(fasts.length)


    }
 
       
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
        row.innerHTML = 
        `<td>${fast[0]}</td>
        <td>${fast[1]}</td>
        <td>${fast[2]}</td>
        <td>${fast[3]}</td>
        <td>${fast[4]}</td>
        <td class  = 'delete'>X</td>`

                         list.appendChild(row)
                        
                        
                   console.log(fasts)      

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
  console.log(btn.closest('tr'))

  removeFastPeriodFromLocalStorage(btn.closest('tr'))
 
   

}


function removeFastPeriodFromLocalStorage(fast){
    let fasts ;
     if(localStorage.getItem('fasts') === null){
         fasts = []

     }else{
         fasts = JSON.parse(localStorage.getItem('fasts'));
        }

    fasts.forEach(function(fast, index){
        if(fast === fast){
            fasts.splice(index,1);
            console.log(fast)
        }
    })
      localStorage.setItem('fasts', JSON.stringify(fasts));
    }