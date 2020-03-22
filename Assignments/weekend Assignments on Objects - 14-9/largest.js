function rankings(list) {
    const array = list.slice(0)
    console.log(array)
    const arr = array.slice(0).sort((a,b)=>{return b-a})
    arr.forEach((a,index)=>{
        array.splice(list.indexOf(a),1,index+1)
    })
    console.log(array)
}

rankings([10, 5, 20]); // [2, 3, 1]

rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]

//rankings([100]); // [1]

//rankings([4, 2, 3, 1]); // [1, 3, 2, 4]