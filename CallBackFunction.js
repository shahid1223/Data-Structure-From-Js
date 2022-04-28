// const doSomething = (arr, callback) => {
//     arr.push(100);

//     callback();
// };

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// doSomething(data, function () {
//     console.log("first => ", data);
// });

const firstName = 'Mohd';
const lastName = 'shahid';
let fullname = ''

const printFullname = (firstName, lastName, callback) => {

    fullname = firstName + ' ' + lastName
    callback();

};

printFullname(firstName, lastName, function () {
    console.log(fullname)
})