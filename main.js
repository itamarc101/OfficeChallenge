//write your code here to make the tests pass
class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName;
    }
}

class Employee {
    constructor(name) {
        this.name = name;
    }

    work(office) {
        for (let i = 0; i < 10; i++) {
            office.documents.push(new Document(this.name));
        }
    }
}


class Manager {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    hireEmployee(name) {
        this.employees.push(new Employee(name));

    }

    askEmployeesToWork(office) {
        this.employees.forEach(employee => {
            employee.work(office); 
        });
  }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }

    clean() {
        console.log("Clean");
    }
}

class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireManager(name) {
        const manager = new Manager(name);
        this.managers.push(manager);
        return manager;
    }

    hireCleaner(name) {
        const cleaner = new Cleaner(name);
        this.cleaners.push(cleaner);
    }

    startWorkDay() {
        this.managers.forEach(manager => manager.askEmployeesToWork(this));  
        this.cleaners.forEach(cleaner => cleaner.clean());
  }
}