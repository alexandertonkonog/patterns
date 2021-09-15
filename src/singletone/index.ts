export default class SingletoneApp {
    constructor() {
        const one = Singletone.getInstance();
        const two = Singletone.getInstance();
        const three = Singletone.getInstance();
        one.makeJob();
        two.makeJob();
        three.makeJob();
    }
}

class Singletone {

    private static instance: Singletone;

    public static getInstance(): Singletone {
        if (!this.instance) {
            this.instance = new Singletone(1);
        }
        return this.instance;
    }

    public makeJob(): void {
        console.log('Работает объект с id ' + this.id);
    }

    private constructor(private id: number) {
        this.id = id;
        console.log('Создан объект с id ' + this.id);
    }
}