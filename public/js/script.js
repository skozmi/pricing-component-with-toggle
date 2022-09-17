$(document).ready(()=>{
  $("#inputToggle").on("click", ()=> {
   if($(".big-number1").text() == "19.99") {
     $("#inputToggle").addClass("checked");
     $(".big-number1").text("199.90");
     $(".big-number2").text("249.90");
     $(".big-number3").text("399.90");
   } 
   else {
     $("#inputToggle").removeClass("checked");
     $(".big-number1").text("19.99");
     $(".big-number2").text("24.99");
     $(".big-number3").text("39.99");
   }
  });
});
