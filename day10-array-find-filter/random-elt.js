const randomElts = [10,20,30,40];


function randomElement(randomElts){
    let result;
    const ran = Math.random();
    console.log(ran);
    result = randomElts[parseInt(randomElts.length*ran)] ;
    return result;
}

console.log(randomElement(randomElts));


/*
C:\Users\ASUS\Desktop\july2019-mern\javascript\day10-array-find-filter>node random-elt.js
0.44020638384435884
20

C:\Users\ASUS\Desktop\july2019-mern\javascript\day10-array-find-filter>node random-elt.js
0.00920578898433111
10

C:\Users\ASUS\Desktop\july2019-mern\javascript\day10-array-find-filter>node random-elt.js
0.6718478296679609
30

C:\Users\ASUS\Desktop\july2019-mern\javascript\day10-array-find-filter>node random-elt.js
0.8748094471902927
40
*/