
//business logic

// interface logic

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var wordArray = $("input#year").val().toLowerCase().split("");
    var sliceArray = wordArray.slice(0,1);

    if ((sliceArray == "a") || (sliceArray == "e") || (sliceArray == "i") || (sliceArray == "o") || (sliceArray == "u")){
      console.log('vowel');
    }


    console.log(wordArray);
    console.log(sliceArray);
    // $('.display').text(array);



  });
});
