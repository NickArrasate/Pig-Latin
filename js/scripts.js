
//business logic

// interface logic

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var wordArray = $("input#year").val().toLowerCase().split(" ");

    wordArray.forEach(function(word){

    var word = word.split("")
    console.log(word);
    var sliceArray = word.slice(0,1);
    var sliceArray2 = word.slice(1,2);


    if ((sliceArray == "a") || (sliceArray == "e") || (sliceArray == "i") || (sliceArray == "o") || (sliceArray == "u")){
      $('.display').append(word.join('') + "ay ");
    }
     else if ((sliceArray2 != "a") && (sliceArray2 != "e") && (sliceArray2 != "i") && (sliceArray2 != "o") && (sliceArray2 != "u")){
      var first = word.shift();
      var second = word.shift();
      var newone = word.push(first,second);
      $('.display').append(word.join('') + "ay ");
    }
    else {
      var first = word.shift();
      var newone = word.push(first);
      $('.display').append(word.join('') + "ay ");
    }
    console.log(word);
    console.log(sliceArray);
  });


  });
});
