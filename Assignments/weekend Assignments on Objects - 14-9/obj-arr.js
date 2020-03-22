function tallyPoints(str){
    const result = {}
    for(const char of str){
        sChar = char.toLowerCase()
        if (result[sChar]) {
            char == char.toUpperCase() ? result[sChar]-- : result[sChar]++
        } else {
            char == char.toUpperCase() ? result[sChar]= -1 : result[sChar] = 1
        }
    }

    console.log(result)


    //sort by value in object
    const valueSort = Object.keys(result).sort(function(a,b){
        return result[b]-result[a]
    })
    console.log(valueSort);  

    //object -> array conversion
        const array = new Array()
        for (const key of valueSort) {
            array[key] = result[key]
        }

        return array

}


console.log(tallyPoints('abcde'))
console.log(tallyPoints('dbbaCEDbdAacCEAadcBdD'))
console.log(tallyPoints('dbbaCabddbEDbdAacccccccCbbEAadcB'))

/*//https://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value
    var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
    keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
    console.log(keysSorted);  
*/


