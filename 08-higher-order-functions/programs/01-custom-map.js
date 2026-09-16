function customMap(arr, callback) {
    const result = [];
    
    for(let index = 0; index < arr.length; index++) {
        result.push(callback(arr[index], index));
    }
    
    return result;
}

function printElement(element, index) {
    return `Element at index ${index} is ${element}`;
}

const arr = [9,8,7,6,5];
const result = customMap(arr, printElement);

console.log(result);
