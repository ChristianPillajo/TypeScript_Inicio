export function whatsMyType<T>(argument: T): T {
    return argument;
}

const amIString = whatsMyType('Hola Mundo');
const amINUmber = whatsMyType(100);
const amIArray = whatsMyType([1,2,3,4,5,6]);

console.log('Saludo :' ,amIString.split(' '));
console.log('Edad :', amINUmber.toFixed());
console.log('Números : ',amIArray.join('-'));