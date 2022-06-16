const arr = ["hello", "hii", "by"];
console.log(Array.from(arr.keys()));
//output [0,1,2]
console.log(Array.from(arr.values()));
//output ["hello", "hii", "by"]
console.log(Array.from(arr.entries()));
//output [ [ 0, 'hello' ], [ 1, 'hii' ], [ 2, 'by' ] ]
console.log(arr.toString());
//output hello,hii,by

const salary = [300.0, 800.55, 9000.0];
console.log(salary.toLocaleString('sp-Sp', {
    style: 'currency',
    currency: 'USD',
}));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

console.log(arr1.concat(arr2, [11, 12, 13, 14, 15]));
console.log([...arr1, ...arr2]);
console.log(arr1.slice());

const example = [{ n: 0 }, { n: 1 }, { n: 2 }];
const copyExample = JSON.parse(JSON.stringify(example));

example[0].n = 10

console.log(example)
console.log(copyExample)