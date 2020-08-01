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

console.log(currentTime);

console.log(moment.duration().asHours());

// Timeblocks for standard business hours
var hoursArray = [];

for (let hour = 9; hour < 10; hour++) {
    hoursArray.push(moment({ hour }).format('h:mm a'));
    hoursArray.push(
        moment({
            hour: 1
        }).format('h:mm a')
    );
}

console.log(hoursArray);

for (i = 0; i < 9; i++) {
    var rowDiv = $("<div class='row'>");

    var colOne = $("<div class= 'col-md-2'><p class='hourLabel'>");
    $(".hourLabel").text(hoursArray);

    var colTwo = $("<div class= 'col-md-8 justify-content-center' + 'taskInput'></div>");

    var colThree = $("<div class = 'col-md-1'><p class='button'>");
    
    rowDiv.append(colOne, colTwo, colThree);
    $(".container").append(rowDiv);

}

var saveBtn = $("<button class='save-btn' id='save'>Save</button>");
$(".button").append(saveBtn);

var toDoInput = $("<input class='todo-input' id='inputID'>");
$(".col-md-8").append(toDoInput);

// if (hour < currentTime) {
//     taskInput.attr("style", "background-color: pink;");
// }
// if (hour = currentTime) {
//     taskInput.attr("style", "background-color: #94A1B3");
// }
//


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

var toDoInputField = $("#inputID");
var saveButton = $("#save");

renderLastSaved();

function renderLastSaved() {
    var toDoField = localStorage.getItem("text");
    
    if (!toDoField) {
        return;
    }
    
    toDoInputField.textContent = text;
}

saveButton.on("click", function () {
    event.preventDefault();

    var text = $("MAKE INDIVIDUAL IDS FOR EACH INPUT FIELD?").value;

    if (text ==="") {
        return;
    } else {
        animate button function?

        localStorage.setItem("text", );
        renderLastSaved;
    }
});

// WHEN I refresh the page
// THEN the saved events persist


});

