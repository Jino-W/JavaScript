// display the objects their readingStatus is true
function readingStatus(arrObj){
    const result =[];
    arrObj.forEach(function(each){
        if(each.readingStatus){
            result.push(each);
        }
    })
    return result; 
}




var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    var empty =[];

console.log(readingStatus(library));
console.log(readingStatus(empty));