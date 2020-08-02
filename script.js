$( document ).ready(function() {
    console.log( "ready!" );

// Display today's date & time in jumbotron
$("#date").text("Today is " + (moment().format('dddd, MMMM Do YYYY')));
$("#current-time").text((moment().format('h:mm a')));

var update = setInterval( function(){
    date = moment(new Date());
    $("#current-time").text((moment().format('h:mm a')));

}, 1000)

setInterval(update, 1000);

var userInputField = $("#dataTime")
renderLastSaved();
convertHour();

// Current Time
var todayDate = new Date(); 
var currentTime = todayDate.getHours();

console.log("current time: " + currentTime);
console.log(moment('9:00', "h:mm"));

function convertHour() {
    $('div[class="col-md-2"]').each(function() {
        var timeNow = parseInt(currentTime.format("HHmm"));
        console.log(timeNow);
        var indexOfRow = parseInt(timeIndex);
        console.log(indexOfRow);

        if (timeNow < indexOfRow) {
            $(".col-md-8").attr("style", "background-color: #94A1B3;");
        }
    });
}

for (var hour = 7; hour < 24; hour++) {
    var rowDiv = $("<div class='row'>")

    
    var colOne = $("<div class= 'col-md-2'><p class='hourLabel'>")
    if (hour <= 12) {
        colOne.text([hour] + ":00 am");
        // if (hour < currentTime) {
            
        // } 
    } 
    if (hour === 12) {
        colOne.text([hour] + ":00 pm");
        if (colOne.text === currentTime) {
            $(".col-md-8").attr("style", "background-color: #FDF7EC");
        }
    }
    if (hour > 12) {
        colOne.text([hour]-12 + ":00 pm");
        // if (hour > currentTime) {
        //     $(".col-md-8").attr("style", "background-color: #DDE4E0");
        // }
    }
    
    var colTwo = $("<div class= 'col-md-8 justify-content-center'>")
    
    var colThree = $("<div class = 'col-md-1'><p class='button'>");
    
    rowDiv.append(colOne, colTwo, colThree);
    $(".container").append(rowDiv);
}
    console.log(hour);

// Click into a timeblock, enter an event text, save button
var saveBtn = $("<button class='save-btn' id='save'>Save</button>");
$(".button").append(saveBtn);
var toDoInput = $("<input class='todo-input' id='taskEntered'>").attr("type", "text");
$(".col-md-8").append(toDoInput);

// Each timeblock is color coded to indicate whether it is in the past, present, or future

// The text for that event is saved in local storage, on page refresh the saved event persists


function renderLastSaved() {
    $('input[type="text"]').each(function() {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).val(value);
    });

    //     var text = localStorage.getItem("item");
    
//     userInputField.textContent = text;

// console.log(text);
}

// Click button to save
$(".save-btn").on("click", function(event) {
    event.preventDefault();
    
    $('input[type="text"]').each(function() {
        var id = $(this).attr('id');
        var value = $(this).val();

        localStorage.setItem(id, value);
    });

    // var text = $(".todo-input").val();

    // if (!text) {
    //     console.log("No entry");
    // } else {
    //     localStorage.setItem("item", text);
    //     renderLastSaved();
    // }
});
});

