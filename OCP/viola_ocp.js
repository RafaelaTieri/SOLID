function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type === 'shoes') {
            total += items[i].price * 1.2; 
        } else if (items[i].type === 'clothing') {
            total += items[i].price * 1.1; 
        } 
    }
    return total;
}

const items = [
    { type: 'shoes', price: 50 },
    { type: 'clothing', price: 30 },
    
];

console.log(calculateTotal(items)); 