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

// Timeblocks for standard business hours

for (var hour = 0; hour < 9; hour++) {
    var rowDiv = $("<div class='row'>");

    var colOne = $("<div class= 'col-md-2'><p class= 'hour'>");
    $(".hour").text("9am");
    
    var colTwo = $("<div class= 'col-md-8 justify-content-center' + 'taskInput'></div>");
    var colThree = $("<div class = 'col-md-1'><p class='button'>");
    
    rowDiv.append(colOne, colTwo, colThree);
    $(".container").append(rowDiv);

}

var saveBtn = $("<button class='save-btn'>Save</button>");
$(".button").append(saveBtn);

var toDoInput = $("<input class='todo-input' id='input'>");
$(".col-md-8").append(toDoInput);

if (hour < currentTime) {
    taskInput.attr("style", "background-color: pink;");
}
if (hour = currentTime) {
    taskInput.attr("style", "background-color: #94A1B3");
}
//

// // Appending lables from 6:00AM to 12:00AM
// for (var tAM = 0; tAM < 12; tAM++) {
//     //Appends labels and input from 1:00AM to 11:00AM
//     plannerFormEL.append('<label class="timeLabel col-2" id="timeLabel' + [tAM] + '">' + [tAM] + ":00AM" + '</label>');
//     plannerFormEL.append('<input class="taskInput col-8" id="input' + [tAM] + '">' + '</input>');
//     plannerFormEL.append('<i style="font-size: 1.25em;" class="far" id="i' + [tAM] + '">' + '</i>' + '<br>');

//     var taskInput = $('.taskInput'); 
//     if (tAM < curHour) {
//         taskInput.attr('style', 'color: black; background-color: lightpink;');
//     }
//     console.log("Current Hour: " + curHour);
//     console.log("Time Options are: " + tAM);
// }

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist


});

