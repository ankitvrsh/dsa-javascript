function square(accumulator, number, index) {
    console.log(number, index);
    accumulator.push(number * number);
    return accumulator;
}

const nums = [1, 2, 3, 4];
const squaredNums = nums.reduce(square, []);
console.log(squaredNums);
