export default class PrototypeApplication {

    constructor() {
        const app = new AppTemplate('traditional', 2);
        app.layout = 'ready';
        app.name = 'Sasha';
        const otherApp: AppTemplate = app.clone();
        const thirdApp: AppTemplate = otherApp.clone();
        console.log(otherApp, thirdApp);
    }

}

interface Template {
    layout: string;
    parent: ThisType<Template>;
    clone(): ThisType<Template>;
}

class AppTemplate implements Template {

    public name: string;
    public layout: string;
    public parent: AppTemplate;

    constructor(private design: string, private id: number) {}

    public clone(): AppTemplate {
        const object = new AppTemplate(this.design, this.id);
        object.layout = this.layout;
        object.parent = this;
        object.name = this.name;
        return object;
    }
}