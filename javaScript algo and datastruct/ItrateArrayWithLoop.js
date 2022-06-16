const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
};

for (const data of arr) {
    console.log(data)
}

for (const data in arr) {
    console.log(data)
}

arr.forEach(val => console.log(val * 3));

console.log(arr.reduce((acc, n) => {
    return acc + n;
}, 0))