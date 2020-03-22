
function getAllPermutations(string) {
    console.log("main-fun")
    var results = [];
  
    if (string.length === 1) {
      results.push(string);
      console.log("result", results)
      return results;
    }
  
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];

      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      console.log("i:",i,"str:", string, "first:",firstChar, "charleft:", charsLeft)


      var innerPermutations = getAllPermutations(charsLeft);
      console.log("innerPermutations",  innerPermutations)

      for (var j = 0; j < innerPermutations.length; j++) {
        console.log("first1:", firstChar, "innerPermutations1:", innerPermutations[j] )
        results.push(firstChar + innerPermutations[j]);
        console.log("result1:", results)
      }
    }
    return results;
  }


  console.log(getAllPermutations("xyz"))