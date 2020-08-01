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
    // .attr("value", hour);

    var colOne = $("<div class= 'col-md-2'><p class='hourLabel'>")
    // .attr("value", hour);
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
    // .attr("data-time", dataTime);
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

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// var user

// renderLastSaved();

// function renderLastSaved() {
//     var toDoField = localStorage.getItem("text");
    
//     if (!toDoField) {
//         return;
//     }

//     toDoInputField.textContent = text;
// }
// // click button to save
// saveButton.on("click", function () {
//     event.preventDefault();

//     var text = $("MAKE INDIVIDUAL IDS FOR EACH INPUT FIELD?").value;

//     if (text ==="") {
//         return;
//     } else {
//         animate button function?

//         localStorage.setItem("text", );
//         renderLastSaved;
//     }
// });

// WHEN I refresh the page
// THEN the saved events persist


});

