//first program
// [4,3,1,5] -> min number from array
//step 1 -> sort array and returm the first element of array

//second approch
// [4,3,1,5]
//step 1 -> First element of array should be treated as min number
//step 2 -> check if the next element of array is min 3 < 4
//step 3 -> i will pretend that min no is 3;
//step 4 -> repeat the same step 2 and 3 till the end of the array

const findMinNumFromArray = (arr) => {
    if (!arr.length) {
        throw new Errors('Array should not be empty');
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        let currentMin = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < currentMin) {
                currentMin = arr[i];
            }
        }
        return currentMin;
    }
};

const result = findMinNumFromArray([40000, 30, 5, 500])
console.log(result)
