$( document ).ready(function() {
    console.log( "ready!" );

// Display today's date & time in jumbotron
$("#date").text("Today is " + (moment().format('dddd, MMMM Do YYYY')));
$("#current-time").text((moment().format('h:mm a')));

var today = new Date();
var currentTime = today.getHours();

var update = setInterval( function(){
    date = moment(new Date());
    $("#current-time").text((moment().format('h:mm a')));

}, 1000)
setInterval(update, 1000);

$(".saveBtn").on("click", function(){
    // set a variable to get values from text area and times
    var value = $(this).siblings(".reservation").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
});

$("#hr-7 .reservation").val(localStorage.getItem("hr-7"));
$("#hr-8 .reservation").val(localStorage.getItem("hr-8"));
$("#hr-9 .reservation").val(localStorage.getItem("hr-9"));
$("#hr-10 .reservation").val(localStorage.getItem("hr-10"));
$("#hr-11 .reservation").val(localStorage.getItem("hr-11"));
$("#hr-12 .reservation").val(localStorage.getItem("hr-12"));
$("#hr-13 .reservation").val(localStorage.getItem("hr-13"));
$("#hr-14 .reservation").val(localStorage.getItem("hr-14"));
$("#hr-15 .reservation").val(localStorage.getItem("hr-15"));
$("#hr-16 .reservation").val(localStorage.getItem("hr-16"));
$("#hr-17 .reservation").val(localStorage.getItem("hr-17"));
$("#hr-18 .reservation").val(localStorage.getItem("hr-18"));
$("#hr-19 .reservation").val(localStorage.getItem("hr-19"));

function hourUpdate(){
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
hourUpdate();
});