
//business logic

// interface logic

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var wordArray = $("input#year").val().toLowerCase().split("");
    var sliceArray = wordArray.slice(0,1);
    var sliceArray2 = wordArray.slice(1,2);


    if ((sliceArray == "a") || (sliceArray == "e") || (sliceArray == "i") || (sliceArray == "o") || (sliceArray == "u")){
      $('.display').text(wordArray.join('') + "ay");
    }
     else if ((sliceArray2 != "a") && (sliceArray2 != "e") && (sliceArray2 != "i") && (sliceArray2 != "o") && (sliceArray2 != "u")){
      var first = wordArray.shift();
      var second = wordArray.shift();
      var newone = wordArray.push(first,second);
      $('.display').text(wordArray.join('') + "ay");
    }
    else {
      var first = wordArray.shift();
      var newone = wordArray.push(first);
      $('.display').text(wordArray.join('') + "ay");
    }


    console.log(wordArray);
    console.log(sliceArray);
    // $('.display').text(array);



  });
});
