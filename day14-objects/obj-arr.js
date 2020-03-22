//copying the obj to another obj without affecting the previous one(i.e, independent obj)
//Object.assign({},source)  =>=>independent obj

const a = {
    name:'raj'
}
const b=a;
console.log('a-value =', a);   //a-value = { name: 'raj' }
console.log('b-value =', b);    //b-value = { name: 'raj' }

//change in 'b' affacting 'a'
b.name = 'vishnu';
console.log('a-value =', a);     //a-value = { name: 'vishnu' }
console.log('b-value =', b);     //b-value = { name: 'vishnu' }

//change in 'c' is not affacting 'a'
c=Object.assign({},a);
c.name = 'jino'
console.log('a-value =', a);     //a-value = { name: 'vishnu' }
console.log('c-value =', c);     //c-value = { name: 'jino' }


//--------------------------------------------------------------------------------


//copying the array to another array without affecting the previous one(i.e, independent array)
//array.slice(0) =>independent array
//[].concat(array)  =>=>independent array

const n1=[10];
const n2 = n1;

n2.push(20);
console.log('n1=',n1);         //n1= [ 10, 20 ]
console.log('n2=',n2);         //n2= [ 10, 20 ]

//independent arrays:
//1.slice()
const n3 =n1.slice(0);
n3.push(30);
console.log('n1=',n1);         //n1= [ 10, 20 ]
console.log('n3=',n3);            //n3= [ 10, 20, 30 ]

//2.concat()
const n4 = [].concat(n1);
n4.push(40);
console.log('n1=',n1);            //n1= [ 10, 20 ]
console.log('n4=',n4);           //n4= [ 10, 20, 40 ]




