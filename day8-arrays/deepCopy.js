const arr = [
    [0,1,1],
    [1,1,1],
    [1,1,1]
]

const newArr = JSON.parse(JSON.stringify(arr))   //https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]==0){
            newArr[i].fill(0)
        }
    }
}

console.log(arr)
console.log(newArr)
