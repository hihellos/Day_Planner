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

// Current Time
var todayDate = new Date(); 
var currentTime = todayDate.getHours();

console.log("current time: " + currentTime);
console.log("duration: " + moment.duration(60, "minutes").asHours());

for (var hour = 9; hour <18; hour++) {
    var rowDiv = $("<div class='row'>")

    var colOne = $("<div class= 'col-md-2'><p class='hourLabel'>")
    if (hour < 12) {
        colOne.text([hour] + ":00 am");
    } 
    if (hour === 12) {
        colOne.text([hour] + ":00 pm");
    }
    if (hour > 12) {
        colOne.text([hour]-12 + ":00 pm")
    }
    var colTwo = $("<div class= 'col-md-8 justify-content-center' + 'taskInput'></div>")
    var colThree = $("<div class = 'col-md-1'><p class='button'>");
    
    rowDiv.append(colOne, colTwo, colThree);
    $(".container").append(rowDiv);
}

// Click into a timeblock, enter an event text, save button
var saveBtn = $("<button class='save-btn' id='save'>Save</button>")
// .attr("value", hour);
$(".button").append(saveBtn);
var toDoInput = $("<input class='todo-input' id='inputID'>");
$(".col-md-8").append(toDoInput);

// Each timeblock is color coded to indicate whether it is in the past, present, or future
if (hour < currentTime) {
    $(".col-md-8").attr("style", "background-color: #94A1B3;");
}
if (hour = currentTime) {
    $(".col-md-8").attr("style", "background-color: #FDF7EC");
}
if (hour > currentTime) {
    $(".col-md-8").attr("style", "background-color: #DDE4E0");
}

// The text for that event is saved in local storage, on page refresh the saved event persists
var userInputField = $("#dataTime")

renderLastSaved();

function renderLastSaved() {
    var text = localStorage.getItem("text");
    
    userInputField.textContent = text;
}

// Click button to save
$(".save-btn").on("click", function(event) {
    event.preventDefault();
    
    var text = $(".todo-input").val();

    if (text === "") {
        console.log("No entry");
    } else {
        localStorage.setItem("text", text);
        renderLastSaved();
    }
});

});

