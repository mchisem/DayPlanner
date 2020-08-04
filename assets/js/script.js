// display date and time function //
function date() {
    // $('#day').text(moment().format("dddd, MMM Do, YYYY")); 
    $('#time').text(moment().format("dddd, MMM Do, YYYY, h:mm a")); 
    setInterval(date, 1000);
}

date();

// save input in local storage with event delegation
const table = $(".table");
const save = $(".fa");

save.on("click", event => {
  if(event.target) {
    console.log("yes");
    var note = $('.input').val();
    localStorage.setItem('input', note)
  }
})

function init() {
    // console.log(localStorage.getItem('input'));
    // $(".input").val(localStorage.getItem('input')); 
    $("#nine").val(localStorage.getItem('9'));
    $("#ten").val(localStorage.getItem('10'));
    $("#eleven").val(localStorage.getItem('11'));
    $("#twelve").val(localStorage.getItem('12'));
    $("#one").val(localStorage.getItem('13'));
    $("#two").val(localStorage.getItem('14'));
    $("#three").val(localStorage.getItem('15'));
    $("#four").val(localStorage.getItem('16'));
    $("#five").val(localStorage.getItem('17'));
   }

init();

var text = $(".text");

for(i = 0; text.length > i; i++){
    localStorage.setItem(i,i);
}

function colors() {
    String = [9,10,11,12,13,14,15,16,17];

    for(i = 0; i <= String.length; i++) {

        var hour = moment().hour();
        
        if (hour <= String[i]-1){
            // console.log(hour <= String[i])
            $("#" + String[i]).css({"background-color": "black"});
            } else if (hour >= String[i]+1){
            // console.log(hour);
            $("#" + String[i]).css({"background-color": "grey"});

        } else if (hour) {
            $("#" + String[i]).css({"background-color": "green"});
        }
    }

} 

