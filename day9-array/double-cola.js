function doubleCola(names1,len){
    for(i=0;i<len;i++){
        if(names1.length<=len){
            //names1.splice(names1.length,0,names1[i],names1[i])
            //------ (or) -----
            names1.push(names1[i],names1[i]);
            //------ (or) -----
            //names1[names1.length]=names1[i];
            //names1[names1.length]=names1[i];
        }
    }
    console.log(names1);
    return names1[len-1];     //position (or) index = length-1
}

console.log(doubleCola(['sheldon','leonard','penny','rajesh','howard'], 11)); //penny
console.log(doubleCola(['sheldon','leonard','penny','rajesh','howard'], 6));   //sheldon
console.log(doubleCola(['sheldon','leonard','penny','rajesh','howard'], 17)); //sheldon
console.log(doubleCola(['sheldon','leonard','penny','rajesh','howard'], 12)); //'rajesh'



/*o/p:
1.
[ 'sheldon',
  'leonard',
  'penny',
  'rajesh',
  'howard',
  'sheldon',
  'sheldon',
  'leonard',
  'leonard',
  'penny',
  'penny',
  'rajesh',
  'rajesh' ]

'penny'


2.
[ 'sheldon',
  'leonard',
  'penny',
  'rajesh',
  'howard',
  'sheldon',
  'sheldon' ]

'sheldon'
*/


//-------------------------- (or) ---------------------------


function doubleCola1(arr,num){
	for(let i=0; i<num ;i++){
		let firstElem=arr.shift();
		arr.push(firstElem,firstElem);
	}
	return arr.pop();         //return arr[arr.length-1]
}

console.log(doubleCola1(['sheldon','leonard','penny','rajesh','howard'], 11)); //'penny'
console.log(doubleCola1(['sheldon','leonard','penny','rajesh','howard'], 6));   //'sheldon'
console.log(doubleCola1(['sheldon','leonard','penny','rajesh','howard'], 2)); //'leonard'
console.log(doubleCola1(['sheldon','leonard','penny','rajesh','howard'], 17)); //'sheldon'
console.log(doubleCola1(['sheldon','leonard','penny','rajesh','howard'], 12)); //'rajesh'
