export default class BuilderApp {
    constructor() {
        const director = new Director();
        const appByDoctor: App = director.buildByDoctor(new ScriptBuilder());
        const appByService: App = director.buildByService(new ScriptBuilder());
        console.log(appByDoctor, appByService);
    }
}

class App {
    public list: string[] = [];
}

interface Builder {
    selectScript(): Builder;
    selectServiceGroup(): Builder;
    selectService(): Builder;
    selectDoctor(): Builder;
    selectDate(): Builder;
    selectTime(): Builder;
    typePersonalData(): Builder;
    typeSMSCode(): Builder;
    getResult(): any;
}

class ScriptBuilder implements Builder {

    private app = new App();

    public selectScript(): ScriptBuilder {
        this.app.list.push('script');
        return this;
    }
    public selectServiceGroup(): ScriptBuilder {
        this.app.list.push('service group');
        return this;
    }
    public selectService(): ScriptBuilder {
        this.app.list.push('service');
        return this;
    }
    public selectDoctor(): ScriptBuilder {
        this.app.list.push('doctor');
        return this;
    }
    public selectDate(): ScriptBuilder {
        this.app.list.push('date');
        return this;
    }
    public selectTime(): ScriptBuilder {
        this.app.list.push('time');
        return this;
    }
    public typePersonalData(): ScriptBuilder {
        this.app.list.push('personal data');
        return this;
    }
    public typeSMSCode(): ScriptBuilder {
        this.app.list.push('sms');
        return this;
    }
    public getResult(): App {
        return this.app;
    }
}

class Director {

    buildByDoctor(builder: Builder): App {
        builder.selectScript();
        builder.selectDoctor();
        builder.selectServiceGroup();
        builder.selectService();
        builder.selectDate();
        builder.selectTime();
        builder.typePersonalData();
        builder.typeSMSCode();
        return builder.getResult();
    }

    buildByService(builder: Builder): App {
        builder.selectScript();
        builder.selectServiceGroup();
        builder.selectService();
        builder.selectDoctor();
        builder.selectDate();
        builder.selectTime();
        builder.typePersonalData();
        builder.typeSMSCode();
        return builder.getResult();
    }
}