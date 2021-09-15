export default class BridgeApp {
    constructor() {
        const pr1 = new MiddleProgrammer(1, 'Sergey');
        const pr2 = new MiddleProgrammer(2, 'Sasha');
        const pr3 = new JuniorProgrammer(3, 'Masha');
        const pr4 = new JuniorProgrammer(4, 'Ivan');
        const projectManager = new ProjectManager([pr1, pr3]);
        const teamLead = new TeamLead([pr2, pr4]);
        const senior = new SeniorProgrammer([pr2, pr4, pr1, pr3]);

        projectManager.force();
        teamLead.force();
        senior.force();
        projectManager.fire(1);
        teamLead.fire();
        senior.fire();
        projectManager.force();
        teamLead.force();
    }
}

abstract class Manager {

    constructor(protected employees: Employee[]) {}

    force(): void {
        const names: string[] = this.employees.map(emp => emp.name);
        console.log(`Manager force with ${names.join(', ')}`);
        this.employees.forEach(emp => emp.makeJob());
    }

    fire(id: number | null): void {
        if (id) {
            this.employees = this.employees.filter(emp => emp.id !== id)
        } else {
            this.employees = [];
        }
    }

    getEmployees(): Employee[] {
        return this.employees;
    }
}

abstract class Employee {
    constructor(public id: number, public name: string) {}
    
    public makeJob(): void {
        console.log(`Работник ${name} работает`);
    };
}

class ProjectManager extends Manager {
    
    constructor(employees: Employee[]) {
        super(employees);
        this.employees = employees;
    }

    force(): void {
        const names: string[] = this.employees.map(emp => emp.name);
        console.log(`Project manager force with ${names.join(', ')}`)
        this.employees.forEach(emp => emp.makeJob());
    }
}

class TeamLead extends Manager {

    constructor(employees: Employee[]) {
        super(employees)
    }

    force(): void {
        const names: string[] = this.employees.map(emp => emp.name);
        console.log(`TeamLead force with ${names.join(', ')}`);
        this.employees.forEach(emp => emp.makeJob());
    }

    fire(): void {
        console.log('Тимлид не может увольнять работников');
    }
}

class SeniorProgrammer extends Manager {

    constructor(employees: Employee[]) {
        super(employees)
    }

    fire(): void {
        console.log('Senior программист не может увольнять работников');
    }
}

class MiddleProgrammer extends Employee {
    public makeJob(): void {
        console.log(`Middle программист ${name} работает`);
    };
}

class JuniorProgrammer extends Employee {
    public makeJob(): void {
        console.log(`Junior программист ${name} работает`);
    };
}
