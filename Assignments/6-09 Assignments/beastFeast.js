function feast(animal,dish){
    if (animal[0] == dish[0] && animal[animal.length - 1] == dish[dish.length - 1]) {
    return true
    } else {
    return false
}
}

console.log(feast('great blue heron', 'garlic naan')) //true
console.log(feast('chickadee', 'chocolate cake'))   //true
console.log(feast('kumba', 'salad')) //false