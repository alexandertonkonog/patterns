export default class LightWeightMain {
    private button: HTMLButtonElement;
    private colorInput: HTMLInputElement;
    private sizeInput: HTMLInputElement;
    private xInput: HTMLInputElement;
    private yInput: HTMLInputElement;
    private wrapper: HTMLElement = document.querySelector('.lightweight');
    private list: HTMLInputElement[] = [];

    constructor() {
        this.init();
        this.render();
    }
    
    private init (): void {
        this.initInputs();
        this.initButton();
    }

    private initButton(): void {
        this.button = document.createElement('button');
        this.button.textContent = 'Новый квадрат';
        this.button.addEventListener('click', () => this.click());
    }

    private initInputs(): void {
        this.colorInput = document.createElement('input');
        this.sizeInput = document.createElement('input');
        this.xInput = document.createElement('input');
        this.yInput = document.createElement('input');
        this.colorInput.setAttribute('placeholder', 'Цвет');
        this.sizeInput.setAttribute('placeholder', 'Размер');
        this.xInput.setAttribute('placeholder', 'Координата Х');
        this.yInput.setAttribute('placeholder', 'Координата Y');
        this.list = [this.colorInput, this.sizeInput, this.xInput, this.yInput];
    }

    private render(): void {
        this.list.forEach(item => {
            this.wrapper.append(item);
        })
        this.wrapper.append(this.button);
    }

    private click(): void {
        const cond: boolean = this.list.some(item => !item.value);
        if (cond) {
            alert('Не заполнены поля');
            return;
        }
        const boxType = BoxTypeFactory.getBoxType(this.colorInput.value, +this.sizeInput.value, this.wrapper);
        BoxFactory.addBox(+this.xInput.value, +this.yInput.value, boxType);
    }
}

class BoxType {
    constructor(private readonly _color: string, private readonly _size: number, private readonly _wrapper: HTMLElement) {}
    get color(): string {
        return this._color;
    }
    get size(): number {
        return this._size;
    }
    get wrapper(): HTMLElement {
        return this._wrapper;
    }
}

class BoxTypeFactory {
    private static boxTypes: BoxType[] = [];
    public static getBoxType(color: string, size: number, wrapper: HTMLElement) : BoxType {
        const result = BoxTypeFactory.boxTypes.find(box => box.color === color && box.size === size);
        if (result) {
            return result;
        }
        const boxType =  new BoxType(color, size, wrapper);
        BoxTypeFactory.boxTypes.push(boxType);
        console.log(BoxTypeFactory.boxTypes);
        return boxType;
    }
}

class Box {
    private element: HTMLElement;
    constructor(private x: number, private y: number, private type: BoxType) {};
    public render(): void {
        this.element = document.createElement('div');
        this.element.classList.add('lightweight__box');
        this.element.style.width = this.type.size + 'px';
        this.element.style.height = this.type.size + 'px';
        this.element.style.left = this.x !== 0 ? this.x + 'px' : '0';
        this.element.style.top = this.y !== 0 ? this.y + 'px' : '0';
        this.element.style.backgroundColor = this.type.color;
        this.type.wrapper.append(this.element);
    }
}

class BoxFactory {
    private static boxes: Box[] = [];
    public static addBox(x: number, y: number, type: BoxType) : void {
        const box = new Box(x, y, type);
        BoxFactory.boxes.push(box);
        box.render();
        console.log(BoxFactory.boxes);
    }
}