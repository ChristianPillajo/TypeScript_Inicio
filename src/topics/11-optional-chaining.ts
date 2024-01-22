export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger={
 name: 'Cristian',   
}

const passenger2: Passenger={
    name: 'David',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = (passenger: Passenger)=>{
    const howManyChildren = passenger.children?.length || 0 ;  // ? optional children
    console.log('Número de hijos :', howManyChildren);
}

printChildren(passenger2);