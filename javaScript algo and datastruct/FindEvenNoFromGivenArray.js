const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = [];
const oddArr = [];


const findEvenNoFromGivenArray = (data) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 == 0) {
            evenArr.push(data[i]);
        } else {
            oddArr.push(data[i]);
        }
    }
    return evenArr;
};

findEvenNoFromGivenArray(arr);
console.log(evenArr, oddArr);