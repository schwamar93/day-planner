$(document).ready(function() {
   
    $(".saveBtn").on("click", function() {
 
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      console.log('value:', value);
      console.log('time:', time);
     
      localStorage.setItem(time, JSON.stringify(value))
    });
    function hourUpdater() {
      var currentHour = moment().hours();
      console.log('current hour:', currentHour);

      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log("block hour:", blockHour);
        var id = $(this).attr("id");
        var loadData = JSON.parse(localStorage.getItem(id));
        if (loadData != null){
         $(this).children(".description").val(loadData);
       }
       
       if (currentHour > blockHour) {
         $(this).addClass('past')
       }

       else if (currentHour == blockHour) {
         $(this).removeClass('past');
         $(this).addClass('present');
       }

       else {
         $(this).removeClass('past');
         $(this).removeClass('present');
         $(this).addClass('future');
       }
      });
    }
    hourUpdater();
    function timeUpdate(){
     setTimeout(timeUpdate, 1000*15);
     console.log("Time is Updating");
     hourUpdater();
   }
   timeUpdate();
    
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });