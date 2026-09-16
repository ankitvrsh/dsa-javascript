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

function calculateTotalPrice(prevTotal, currItem, index) {
    const currTotal = prevTotal.price + currItem.price;

    console.log(prevTotal.price, currItem.price, index);

    return { price: currTotal };
}

const cartItems = [
    {name: "Iphone", price: 50000},
    {name: "Backcover", price: 5000},
    {name: "Tempered Glass", price: 500}
];

// const totalPrice = customReduce(cartItems, calculateTotalPrice);
const totalPrice = customReduce(cartItems, calculateTotalPrice, { price: 0 });
console.log(totalPrice);
