function joinArray(array, delimiter) {
    const join = array.join(delimiter);
    console.log(join);
}

myColor = ["Red", "Green", "White", "Black"];
joinArray(myColor,",");
joinArray(myColor,"+");