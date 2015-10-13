$(document).ready(function(){
  $("#intro form").submit(function(event){
    //alert("yeehaw");

    var gayMar = parseInt($("input[name=radiogay]:radio").val());
    var gun = parseInt($("input[name=radiogun]:radio").val());
    var abo = parseInt($("input[name=radioabortion]:radio").val());

    var score = gayMar + gun + abo

    console.log(score);

    event.preventDefault();
  });

});
