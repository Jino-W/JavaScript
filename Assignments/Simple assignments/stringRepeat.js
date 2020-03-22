// string concatination

function repeat(str, n) {
    let result = '';
    for (i = 1; i <= n; i++){     //performing operation 'n' time
        result += str;          //'Matt' + 'Matt' + 'Matt' => 'MattMattMatt'
    }
return result
}


console.log(repeat('Matt', 3));        // 'MattMattMatt'

console.log(repeat('Elie', 2));      // 'ElieElie'

console.log(repeat('Michael', 0));     // ''