
export interface Product{
    description: string;
    price: number;
}

const phone: Product={
    description: 'Nokia 34',
    price: 250.0,
}

const tablet : Product = {
    description: 'IPad Air',
    price: 205,
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): number[]{
let total =0;

options.products.forEach(product =>{
    total = total + product.price;
    //total += product.price;
});

return[total, total*options.tax]
}


const shoppingCart= [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax,

});

//console.log('Total', result[0]);
//console.log('Tax', result[1]);


