$( document ).ready(function() {
    console.log( "ready!" );

// User Story
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// Display today's date & time in jumbotron
$("#date").text("Today is " + (moment().format('dddd, MMMM Do YYYY')));
$("#current-time").text((moment().format('h:mm:ss a')));

var update = setInterval( function(){
    date = moment(new Date());
    $("#current-time").text((moment().format('h:mm:ss a')));

}, 1000)

  setInterval(update, 1000);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// my object has hours 9am-5pm, To do input, save button
// var plannerObj = [
//     {
//     time: ["9:00:00", "10:00:00", "11:00:00", "12:00:00", "1:00:00", "2:00:00", "3:00:00", "4:00:00", "5:00:00"],
//     activity: "",
//     saveBtn: 
//     }

    
// ]

for ( var hour = 9; hour < 18; hour++) {
    var rowDiv = $("<div class='row'>");
    rowDiv.attr("row-number", [hour]);

    var colOne = $("<div class='col-sm-1'>");
    var colTwo = $("<div class='col-sm-10'>");
    var colThree = $("<div class = 'col-sm-2' + 'button'>");

    $(".container").append(rowDiv);
    rowDiv.append(colOne, colTwo, colThree);
}

//

var saveBtn = $("<button class='save-btn'>Save Button</button>");
$(".col-sm-2").append(saveBtn);



// var toDoInput = $("<div id = 'input-form'>");
// var inputArea = $("<div id = 'todo-input'>Input input input</div>");

// $("#input-form").append(inputArea);
// $(".col-sm-10").append(toDoInput);

// for loop to dynamically create activity row, with time col-1, activity col-9, savebutton col-2
// needs to loop through time array 9am-5pm to put in 1st col of each row
// needs to put blank activity col in each row
// needs to put save task button in col in each row

// var

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


});