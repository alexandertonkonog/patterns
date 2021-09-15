export default class CompositeApp {
    constructor() {
        const lowerBox = new Box([new Good(200), new Good(100)]);
        const middleBox = new Box([lowerBox, new Good(200), new Good(100)]);
        const mainBox = new Box([lowerBox, middleBox, new Good(300), new Good(500)]);
        console.log('Стоимость товаров в коробках ' + mainBox.price);
    }
}

interface Entity {
    price: number;
}

class Box implements Entity {
    constructor (private children: Entity[]) {}

    get price (): number {
        return this.children.reduce((prev: number, next: Entity) => prev + next.price, 0);
    }
}

class Good implements Entity {
    constructor(private _price: number) {}

    get price (): number {
        return this._price;
    }
}