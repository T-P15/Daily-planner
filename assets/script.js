

function savePlan() {
  console.log("plan");
  let plan = $(this).siblings('.description').val();
  console.log("plan = ", plan);

  let planHour = $(this).parent().attr("id").split("-")[1];
  console.log("plan hour = ", planHour);

  localStorage.setItem(planHour, plan);
}

$('.saveBtn').on('click', savePlan);


function colorTime() {

  let dayjsHour = dayjs().hour();
  
  $(".time-block").each(function () {

    let planHour = parseInt($(this).attr("id").split("-")[1]);

    if (planHour < dayjsHour) {
      $(this).addClass("past");
    } 
     else if (planHour == dayjsHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } 
      else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    } })}


colorTime();


$('#hour-9 .description').val(localStorage.getItem('9'));
$('#hour-10 .description').val(localStorage.getItem('10'));
$('#hour-11 .description').val(localStorage.getItem('11'));
$('#hour-12 .description').val(localStorage.getItem('12'));
$('#hour-13 .description').val(localStorage.getItem('13'));
$('#hour-14 .description').val(localStorage.getItem('14'));
$('#hour-15 .description').val(localStorage.getItem('15'));
$('#hour-16 .description').val(localStorage.getItem('16'));
$('#hour-17 .description').val(localStorage.getItem('17'));


var today = dayjs().format('dddd - MMM D YYYY');
$("#currentDay").text(today);



