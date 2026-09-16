function customFilter(array, callback) {
    const result = [];

    for(let index = 0; index < array.length; index++) {
        if(callback(array[index], index)) {
            result.push(array[index]);
        }
    }

    return result;
}

const array = [11, 12, 13, 14, 15];

const result = customFilter(array, (element, index) => {
    return element % 2 == 0;
});

console.log(result);
