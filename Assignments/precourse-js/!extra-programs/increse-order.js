/*
incresing order of given marks.
*/

function increseOrder(a, b){ 
    a.push(b);                              //      (or)       a[a.length]=b;
    var loop;
    for(loop=1;loop<=a.length;loop++){
        for(var i=0;i<a.length;i++){
            if(a[i]>a[i+1]){
                var temp=a[i];
                a[i]=a[i+1];
                a[i+1]=temp;
            }
        }
        a.length-1;
    }
    return a;
}
console.log(increseOrder([50, 100, 40, 75, 91, 82], 20));            
console.log(increseOrder([35, 48, 72, 61, 80], 100));              
console.log(increseOrder([95, 69, 32, 22, 60, 64], 10));




/* o/p:-
[ 20, 40, 50, 75, 82, 91, 100 ]
[ 35, 48, 61, 72, 80, 100 ]
[ 10, 22, 32, 60, 64, 69, 95 ]
*/


//--------------------------------------------------------------------------------------
//sorting numbers

//1.descending order

function myFunction(points) {
  points.sort(function(a, b){return b - a});
  console.log(points);  
}
var points = [40, 100, 1, 5, 25, 10];
myFunction(points);

// o/p;-        [ 100, 40, 25, 10, 5, 1 ]

//-------------------------------------------

//1.ascending order

function myFunction1(point) {
    point.sort(function(a, b){return a - b});
    console.log(point);  
  }
  var point = [40, 100, 1, 5, 25, 10];
  myFunction1(point);
  
  // o/p;-        [ 1, 5, 10, 25, 40, 100 ]

  //--------------------------------------------------------------------------------------


  
