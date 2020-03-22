
const str ='1234567890';
function usPhoneFormatter(str){
    const first = str.slice(0,3);
    const second = str.slice(3,6);
    const third = str.slice(6);
    //return '(' + first +')' + ' ' + second + '-' + third;
    return `(${first}) ${second} - ${third}`;
}

console.log(usPhoneFormatter(str));
console.log(usPhoneFormatter('1239876540'));





