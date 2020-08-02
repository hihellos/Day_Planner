$( document ).ready(function() {
    console.log( "ready!" );

// var setBoxes = localStorage.getItem("text")

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

// Current Time
var todayDate = new Date(); 
var currentTime = todayDate.getHours();

console.log("current time: " + currentTime);
console.log(parseInt(moment().format('h')));

// Loop to create rows, with 3 columns for each time, task input, and save button
// Each timeblock is color coded to indicate whether it is in the past, present, or future
for (var hour = 7; hour < 20; hour++) {
    var rowDiv = $("<div class='row'>")

    var colOne = $("<div class= 'col-md-2'><p class='hourLabel'>")
    var colTwo = $("<div class= 'col-md-8 justify-content-center'>").attr("value", [hour]);
    var colThree = $("<div class = 'col-md-1'><p class='button'>");
    
    if (hour <= 12) {
        colOne.text([hour] + ":00 am");
        } 
    if (hour === 12) {
        colOne.text([hour] + ":00 pm");
    }
    if (hour > 12) {
        colOne.text([hour]-12 + ":00 pm");
    }
        if ((parseInt(moment().format('h'))) <= hour + 12) {
            $(".col-md-8").attr("style", "background-color: #E7C7C5");
        }
        if ((parseInt(moment().format('h'))) == hour + 12) {
            $(".col-md-8").attr("style", "background-color: #FDF7EC");
        }
        if ((parseInt(moment().format('h'))) > hour + 12) {
            $(".col-md-8").attr("style", "background-color: #DDE4E0");
        }
    
    rowDiv.append(colOne, colTwo, colThree);
    $(".container").append(rowDiv);
}
    console.log(hour);

// Click into a timeblock, enter an event text, save button
var saveBtn = $("<button class='save-btn' id='save'>Save</button>");
$(".button").append(saveBtn);
var toDoInput = $("<input class='todo-input' id='taskEntered'>").attr("type", "text");
$(".col-md-8").append(toDoInput);

// The text for that event is saved in local storage, on page refresh the saved event persists
function renderLastSaved() {
    $('input[type="text"]').each(function() {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).val(value);
    });

// var text = localStorage.getItem("item");
    
// userInputField.textContent = text;

// console.log(text);
}

var rowValue = $("")
$(".col-md-2")

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

// Manoli class

$(".saveBtn").on("click", function(){
    // set a variable to get values from text area and times
    var value = $(this).siblings(".reservation").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,value);

});

$("#hr-9 .reservation").val(localStorage.getItem("hr-9"));

function hourUpdate (){
    var currentTime = today.getHours();
    $(".timeslot").each(function() {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
        if (blockTime < currentTime) {
            $(this).addClass("past")
        } else
        if (blockTime === currentTime) {
            $(this).removeClass("past").addClass("present")
        }
        else {$(this).removeClass("past", "present").addClass("future");
        }
    });
    
}



});
});

