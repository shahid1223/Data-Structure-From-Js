// const isInt = (num) => {
//     if (typeof num === 'number') {
//         return console.log("isNum => " + num)
//     } else {
//         return console.log("Not a number => ", num)
//     }
// };

// isInt(2)

// const addSix = (num) => {
//     return num + 6;
// }

// const result = addSix(6)
// console.log(result)

const arr = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
]

let newArr = []

console.log("arr=> ", arr);
console.log("NewArr=> ", newArr);

const pushData = (arr) => {
    arr.map((data, index) => {
        newArr.push({
            name: data.name
        })
    });
};

pushData(arr);

console.log("After push=> ", newArr);