class Department {
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }

    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('id', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation();