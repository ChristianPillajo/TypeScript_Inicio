export class Person {
    //public name: string;
    //public address: string;

    constructor(public name: string, public address: string) {
        this.name = name;
        this.address = address;
    }
}

export class Hero extends Person {
    constructor(public alterEgo: string, public age: number, public realName: string,
    ) {
        super(realName, 'Quito');
    }
}

const ironman = new Hero('Ironman', 45, 'Tony Bola');
console.log('Nombre : ', ironman.name);
console.log('Direccion :', ironman.address);
console.log('AlterEgo :', ironman.alterEgo)
console.log('Edad : ', ironman.age);
console.log('NOmbre Real : ', ironman.realName);

//const ironman = new Person('David', 'Quito');
//console.log('Nombre :', ironman.name);
//console.log('Dirección :', ironman.address);