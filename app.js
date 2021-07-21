



document.getElementById('form').addEventListener('submit',function(e) {




setTimeout(calculateFinishTime, 2000)
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
     console.log(selectedDuration)



    //console.log(startTime.value)
    //console.log(startDate)
    //console.log(startDate.value)
    //console.log(startTime)
    //console.log(startTime.value)
    let m = moment(`${startDate.value}:${startTime.value}`)
    console.log(m.toString())

    m.add(selectedDuration, 'hours')

   //console.log(m.toString())
   finishDateAndTime.value = m.toString()
   console.log(finishDateAndTime.value)


    //compute finish time 
    //finishTime = startTime.value + duration.value
    



}

//console.log(moment())