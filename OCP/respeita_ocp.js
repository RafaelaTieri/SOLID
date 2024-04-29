const taxCalculator = {
    shoes: (price) => price * 1.2, 
    clothing: (price) => price * 1.1, 

};

function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const taxFunc = taxCalculator[item.type];
        if (taxFunc) {
            total += taxFunc(item.price);
        }
    }
    return total;
}


const items = [
    { type: 'shoes', price: 50 },
    { type: 'clothing', price: 30 },
    { type: 'books', price: 20 }, 
];

console.log(calculateTotal(items)); 