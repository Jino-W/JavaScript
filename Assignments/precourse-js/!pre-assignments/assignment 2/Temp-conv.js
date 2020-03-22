/*
Write a converter function that accepts a temperature in Fahrenheit and returns the temperature in Celsius.

For your reference, here is the equation for converting Fahrenheit to Celsius: T(°C) = (T(°F) - 32) × 5/9

Examples

1.

INPUT: converter(77);
OUTPUT: 25
2.

INPUT: converter(32);
OUTPUT: 0
*/


function converter(a){
    c=(a-32)*5/9;
    return c;
}

console.log(converter(77));
console.log(converter(32));