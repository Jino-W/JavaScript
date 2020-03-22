// find the index of the given number
function indexOf(array, a) {
    for (i = 0; i < array.length; i++){
        if(array[i] == a){
            return i;                    //return 'index'
        } 
    }
    return -1;
}


//if(array[i] == num)   => return 'index'
var arr = [5, 10, 15, 20];    
indexOf(arr, 20); // 3

var arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

//if(num is not found in array)  => return -1
var arr3 = [1, 2];
indexOf(arr3, 10); // -1