
//business logic
var runIt = function(words){


  var word = words.split("");

  console.log(word);

  var sliceArray = word.slice(0,1);
  var sliceArray2 = word.slice(1,2);
  var sliceArray3 = word.slice(2,3);


  if ((sliceArray == "a") || (sliceArray == "e") || (sliceArray == "i") || (sliceArray == "o") || (sliceArray == "u") || (sliceArray == "y")){
    return word.join('');
  }
  else if ((sliceArray3 != "a") && (sliceArray3 != "e") && (sliceArray3 != "i") && (sliceArray3 != "o") && (sliceArray3 != "u") && (sliceArray2 != "a") && (sliceArray2 != "e") && (sliceArray2 != "i") && (sliceArray2 != "o") && (sliceArray2 != "u")){
    var first = word.shift();
    var second = word.shift();
    var third = word.shift();
    var newone = word.push(first,second,third);
    return word.join('');
  }

  else if ((sliceArray2 != "a") && (sliceArray2 != "e") && (sliceArray2 != "i") && (sliceArray2 != "o") && (sliceArray2 != "u")){
    var first = word.shift();
    var second = word.shift();
    var newone = word.push(first,second);
    return word.join('');
  }
  else if (sliceArray2 == "q" && sliceArray3 == "u"){
    var first = word.shift();
    var second = word.shift();
    var third = word.shift();
    var newone = word.push(first,second,third);
    return word.join('');

  }
  else if (sliceArray == "q" && sliceArray2 == "u"){
    var first = word.shift();
    var second = word.shift();
    var newone = word.push(first,second);
    return word.join('');

  }

  else {
    var first = word.shift();
    var newone = word.push(first);
    return word.join('');
  }

};


// interface logic

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {

    event.preventDefault();
    console.log('word');

    $('.display').empty();
    var words = $("input#english").val().toLowerCase().split(" ");

    for(i = 0; i <= words.length; i++){
      var result = runIt(words[i]);
      $('.display').append(result + "ay ");
    }
  });
});
