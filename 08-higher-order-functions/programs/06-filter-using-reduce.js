function onlyEven(accumulator, number, index) {
    console.log(number, index);

    if(number % 2 === 0) {
        accumulator.push(number);
    }

    return accumulator;
}

const nums = [1, 2, 3, 4];
const evenNums = nums.reduce(onlyEven, []);
console.log(evenNums);
