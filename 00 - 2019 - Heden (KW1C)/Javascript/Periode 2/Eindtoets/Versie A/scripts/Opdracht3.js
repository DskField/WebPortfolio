let products = [
    'BBQ Chicken',
    'Chicken Supreme',
    'Bacon Gorgonzola',
    'Perfect Pepperoni'
];

let prices = [
    '8,99',
    '6,99',
    '7,99',
    '5,99'
];

// getElementById returnt om de een of andere gekke reden null,
// maar in principe is de methode juist voor zover ik weet

for (let i = 0; i < products.length; i++) {
    document.getElementById('product' + (i+1)).innerHTML = products[i];
}

for (let i = 0; i < prices.length; i++) {
    document.getElementById('prijs' + (i+1)).innerHTML = prices[i];
}