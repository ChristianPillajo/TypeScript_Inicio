import{ Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'IPHONE',
        price: 100
    },
    {
        description: 'IPad',
        price:150
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total 2', total);
console.log('Tax 2', tax);


