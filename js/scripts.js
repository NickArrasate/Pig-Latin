
//business logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else{
    return false;
  }
};

// interface logic

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear(year);



    if (isNaN(year) || (year <= 0)){
      $('#result').hide();
      alert("invalid entry");
    } else if (!result) {
      $("#result").show();
      $(".not").text("not");
    } else {
      $("#result").show();
      $(".not").text("");
    }

    $(".year").text(year);


  });
});
