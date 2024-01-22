
function classDecorator<T extends {new(...args:any[]):{}}>(
  constructor: T  
){
return class extends constructor{
    newProperty = 'Nueva Propiedad';
    holas = 'override';
}
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';
    print() {
        console.log('Hola Chichico')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log('Mi clase : ', myClass.print);