export default class FactoryMethod {

    wrapper: HTMLElement = document.querySelector('.factory');

    constructor() {
        
    }

    init(): void {

    }

    initDialog(): void {
        const cond = prompt('Введите тип поля');
        if (!cond) alert('Тип поля обязателен');
        if (cond === 'text') {
            
        }
    }
}

interface Input {
    id: number;
    name: string;
    element: HTMLInputElement;
    render(): void;
}

class NumberInput implements Input {

    private _element: HTMLInputElement;
    private type: string = 'number';
    private _id: number =  Date.now();

    constructor(private _name: string) {}

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get element(): HTMLInputElement {
        return this._element;
    }

    render(): void {
        this._element = document.createElement('input');
        this._element.type = this.type;
        this._element.name = this.name;
        this._element.id = String(this.id);
        this._element.setAttribute('placeholder', this.name);
        this._element.style.backgroundColor = 'blue'; 
    }
}  

class TextInput implements Input {

    private _element: HTMLInputElement;
    private type: string = 'text';
    private _id: number =  Date.now();

    constructor(private _name: string) {}

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get element(): HTMLInputElement {
        return this._element;
    }

    render(): void {
        this._element = document.createElement('input');
        this._element.type = this.type;
        this._element.name = this.name;
        this._element.id = String(this.id);
        this._element.setAttribute('placeholder', this.name);
        this._element.style.backgroundColor = 'red';
    }
}   

interface InputFactory {
    list: Input[];
    render(): void;
}

class TextInputFactory implements InputFactory {

    list: TextInput[];

    public render() {

    }
}

class NumberInputFactory implements InputFactory {

    list: NumberInput[];

    public render() {
        
        const input = new NumberInput('name');
    }
}