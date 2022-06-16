//second program
// [4,3,1,5] -> max number from array
//step 1 -> sort array and returm the first element of array and return the last element of array

//second approch
// [4,3,1,5]
//step 1 -> First element of array should be treated as max number
//step 2 -> check if the next element of array is mxn 3 > 4
//step 3 -> i will pretend that man no is 3;
//step 4 -> repeat the same step 2 and 3 till the end of the array

// const findMaxNumFromArray = (arr) => {
//     if (arr.length === 0) {
//         throw new Errors('Array should not be empty');
//     } else if (arr.length === 1) {
//         return arr[0];
//     } else {
//         let currentMax = arr[0];
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > currentMax) {
//                 currentMax = arr[i];
//             }
//         }
//         return currentMax;
//     }
// };

// const result = findMaxNumFromArray([40, 30, 5, 500, 25, 56, 80])
// console.log(result)

const ok = (arr) => {
    let currentMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i] > currentMax) {
            currentMax = arr[i];
        }
    }
    return currentMax;
}

const result = ok([45, 66, 55, 56, 70]);
console.log(result);

// const max = (arr) => {
//     if (arr.length === 0) {
//         throw new Error('Array should not be empty');
//     } else if (arr.length === 1) {
//         return arr[0];
//     } else {
//         let currentMax = arr[0];
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > currentMax) {
//                 currentMax = arr[i];
//             };
//             return currentMax;
//         }
//     }
// }

// const hello = (arr) => {
//     if (arr.length === 0) {
//         throw new Error("Array shoul not be empty");
//     } else if (arr.length === 1) {
//         return arr[0];
//     } else {
//         let currentMax = arr[0];
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > currentMax) {
//                 currentMax = arr[i];
//             }
//             return currentMax;
//         }
//     }
// }



