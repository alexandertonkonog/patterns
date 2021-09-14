export default class FactoryMethod {

    wrapper: HTMLElement = document.querySelector('.factory');
    factory: InputFactory;
    input: Input;

    constructor() {
        const button: HTMLButtonElement = document.createElement('button');
        button.addEventListener('click', () => this.initDialog());
        button.textContent = 'Открыть диалог';
        this.wrapper.append(button);
    }

    initDialog(): void {
        const cond = prompt('Введите тип поля');
        if (!cond) alert('Тип поля обязателен');
        if (cond === 'text') {
            this.factory = new TextInputFactory();
        } else if (cond === 'number') {
            this.factory = new NumberInputFactory();
        } else {
            this.factory = new CheckboxInputFactory();
        }
        this.input = this.factory.render();
        this.wrapper.append(this.input.element);
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

    constructor(private _name: string) {
        this._name = _name;
        this.render();
    }

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

    constructor(private _name: string) {
        this._name = _name;
        this.render();
    }

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

class CheckboxInput implements Input {

    private _element: HTMLInputElement;
    private type: string = 'checkbox';
    private _id: number =  Date.now();

    constructor(private _name: string) {
        this._name = _name;
        this.render();
    }

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
        this._element.style.backgroundColor = 'green';
    }
}   

interface InputFactory {
    list: Input[];
    render(): Input;
}

class TextInputFactory implements InputFactory {

    list: TextInput[] = [];

    public render(): TextInput {
        const input = new TextInput('name');
        this.list.push(input);
        return input;
    }
}

class NumberInputFactory implements InputFactory {

    list: NumberInput[] = [];

    public render(): NumberInput {
        const input = new NumberInput('name');
        this.list.push(input);
        return input;
    }
}

class CheckboxInputFactory implements InputFactory {

    list: CheckboxInput[] = [];

    public render(): CheckboxInput {
        const input = new CheckboxInput('name');
        this.list.push(input);
        return input;
    }
}