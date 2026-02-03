function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverseArray([1, 2, 3, 4]));


// function reverseArray(arr) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;

//         start++;
//         end--;
//     }
//     return arr;
// }

// console.log(reverseArray([1, 2, 3, 4]));
