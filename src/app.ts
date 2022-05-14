// ---------------------
// Advanced Types
//----------------------

// type Admin = {
//     name: string;
//     privileges: string[];
// };

// type Employee = {
//     name: string;
//     startDate: Date;
// };

// interface ElevatedEmployee extends Employee, Admin {}

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//     name: 'Max',
//     privileges: ['create-server'],
//     startDate: new Date()
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: number, b: string): string;
// function add(a: string, b: number): string;
// function add(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// const result = add('Max', 'Schwarz') as string;
// result.split(' ');

// const fetchedUserData = {
//     id: 'u1',
//     name: 'Max',
//     job: { title: 'CEO', description: 'My own company' }
// };

// // console.log(fetchedUserData.job && fetchedUserData.job.title);
// console.log(fetchedUserData?.job?.title);

// const userInput = null;

// const storedData = userInput ?? 'DEFAULT';

// console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if ( 'privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }

//     if ('startDate' in emp) {
//         console.log('Start Date: ' + emp.startDate);
//     }
// }

// printEmployeeInformation({name: 'Manu', startDate: new Date()});

// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if ('loadCargo' in vehicle) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // const userInputElement = <HTMLInputElement>document.getElementById('message-input')!;
// // const userInputElement = document.getElementById('message-input')! as HTMLInputElement;

// // userInputElement.value = "Hi there!";

// const userInputElement = document.getElementById('message_input');

// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// };

// ---------------------
// Generics
//----------------------

// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hi there!');
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
// console.log(mergedObj);

// interface Lengthy {
//     length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T) {
//     let descriptionText = "Got no value.";
//     if (element.length === 1) {
//         descriptionText = 'Got 1 element.';
//     } else if (element.length > 1) {
//         descriptionText = 'Got ' + element.length + ' elements.';
//     }
//     return [element, descriptionText];
// }

// console.log(countAndDescribe(['Hi there!', 'cookie']));

// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//     return 'Value: ' + obj[key];
// }

// console.log(extractAndConvert({name: 'Max'}, 'name'));

// class DataStorage<T extends string | number | boolean> {
//     private data: T[] = [];

//     addItem(item: T) {
//         this.data.push(item);
//     }

//     removeItem(item: T) {
//         if (this.data.indexOf(item) === -1) {
//             return;
//         }
//         this.data.splice(this.data.indexOf(item), 1);
//     }

//     getItems() {
//         return [...this.data];
//     }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Max');
// textStorage.addItem('Manu');
// textStorage.removeItem('Max');
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objectStorage.addItem({name: 'Max'});
// objectStorage.addItem({name: 'Manu'});
// // ...
// objectStorage.removeItem({name: "Max"});
// console.log(objectStorage);

// interface CourseGoal {
//     title: string;
//     description: string;
//     completeUntil: Date;
// }

// function createCourseGoal(
//     title: string, 
//     description: string, 
//     date: Date
// ): CourseGoal {
//     let courseGoal: Partial<CourseGoal> = {};
//     courseGoal.title = title;
//     courseGoal.description = description;
//     courseGoal.completeUntil = date;
//     return courseGoal as CourseGoal;
// }

// const names: Readonly<string[]> = ['Max', 'Sports'];
// names.push('Manu');
// names.pop();


// ---------------------
// Decorator
//----------------------

function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
    
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);

//------------

function Log(target: any, propertyName: string | symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button');
button?.addEventListener('click', p.showMessage);