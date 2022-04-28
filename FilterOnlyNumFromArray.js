const arr = [1, 2, 3, 'yes', 66, 'no', 8, 'hello'];

const num = arr.filter(num => typeof num === 'number').map((data, index) => {
    console.log('index : ', index + 1, " value : ", data)
})