const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 4, 9, 16, 5];

const check = [];

const checkFrequency = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            console.log(array2[j])
            if (array1[i] * array1[i] === array2[j]) {
                check.push("true");
            }
        }
    }
}

checkFrequency(arr1, arr2);
console.log(check)