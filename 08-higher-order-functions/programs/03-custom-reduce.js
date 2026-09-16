function customReduce(array, callback, accumulator) {
    let startIndex = 0;

    if(accumulator === undefined && array.length > 0) {
        accumulator = array[0];
        startIndex = 1;
    }

    for(let index = startIndex; index < array.length; index++) {
        accumulator = callback(accumulator, array[index], index);
    }

    return accumulator;
}

function sum(prevTotal, currValue, index) {
    console.log(prevTotal, currValue, index);
    return prevTotal + currValue;
}

const array = [1, 2, 3, 4];
const totalSum = customReduce(array, sum, 0);
console.log(totalSum);
