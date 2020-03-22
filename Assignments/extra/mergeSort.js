const list = [23, 4, 42, 15, 16, 8, 3, 7]

const mergeSort = (list) =>{
  if(list.length <= 1) return list;
  const middle = Math.floor(list.length / 2) ;
  console.log("middle: ",middle)
  const left = list.slice(0, middle);
  console.log("left: ",left)
  const right = list.slice(middle, list.length);
  console.log("right: ",right)
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    console.log("merge function", left, right)
    var result = [];
    while(left.length || right.length) {
        if(left.length && right.length) {
            console.log("1")
            if(left[0] < right[0]) {
                console.log("1a")
                result.push(left.shift())
                console.log("result: ", result)

            } else {
                console.log("1b")
                result.push(right.shift())
                console.log("result: ", result)

            }
        } 
        else if(left.length) {
            console.log("2")
            result.push(left.shift())
            console.log("result: ", result)

        } 
        else {
            console.log("3")
            result.push(right.shift())
            console.log("result: ", result)

        }
    }
    return result;
}

console.log(mergeSort(list)) // [ 3, 4, 8, 15, 16, 23, 42 ]