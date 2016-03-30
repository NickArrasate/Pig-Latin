
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
      var sliceArray3 = word.slice(2,3);


      if ((sliceArray == "a") || (sliceArray == "e") || (sliceArray == "i") || (sliceArray == "o") || (sliceArray == "u") || (sliceArray == "y")){
        $('.display').append(word.join('') + "ay ");
      }
      else if ((sliceArray3 != "a") && (sliceArray3 != "e") && (sliceArray3 != "i") && (sliceArray3 != "o") && (sliceArray3 != "u") && (sliceArray2 != "a") && (sliceArray2 != "e") && (sliceArray2 != "i") && (sliceArray2 != "o") && (sliceArray2 != "u")){
        var first = word.shift();
        var second = word.shift();
        var third = word.shift();
        var newone = word.push(first,second,third);
        $('.display').append(word.join('') + "ay ");
      }

      else if ((sliceArray2 != "a") && (sliceArray2 != "e") && (sliceArray2 != "i") && (sliceArray2 != "o") && (sliceArray2 != "u")){
        var first = word.shift();
        var second = word.shift();
        var newone = word.push(first,second);
        $('.display').append(word.join('') + "ay ");
      }
      else if (sliceArray2 == "q" && sliceArray3 == "u"){
        var first = word.shift();
        var second = word.shift();
        var third = word.shift();
        var newone = word.push(first,second,third);
        $('.display').append(word.join('') + "ay ");

      }
      else if (sliceArray == "q" && sliceArray2 == "u"){
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
