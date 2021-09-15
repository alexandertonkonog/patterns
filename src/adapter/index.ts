export default class AdapterApp {
    constructor() {

        const oldService = new OldService();
        const modernService = new ModernService();

        const adapter = new ModernServiceAdapter(modernService);

        const client = new Client(oldService);
        console.log(client.getData());
        client.saveService(adapter);
        console.log(client.getData());
    }
}

interface Data {
    readonly id: number;
    readonly name: string;
    login: string;
}

interface ModernData {
    data_id: number;
    data_name: string;
    data_login: string;
}

interface Service {
    getData(): Data[];
}

class Client {

    constructor(private service: Service) {}

    public saveService(service: Service) {
        this.service = service;
    }

    public getData(): Data[] {
        return this.service.getData();
    } 
}

class OldService implements Service {
    public getData(): Data[] {
        const personalData: Data[] = [
            {
                id: 1,
                name: 'Sasha',
                login: 'Sasha123'
            },
            {
                id: 2,
                name: 'Masha',
                login: 'Masha123'
            },
        ]
        return personalData;
    }
}

class ModernService {

    private data: ModernData[];

    public recieveData(): void {
        const data: ModernData[] = [
            {
                data_id: 1,
                data_login: 'login',
                data_name: 'name'
            },
            {
                data_id: 2,
                data_login: 'login2',
                data_name: 'name2'
            },
        ];
        this.data = data;
    }

    public giveData(): ModernData[] {
        return this.data;
    }   
}

class ModernServiceAdapter implements Service {

    private startData: ModernData[];
    private data: Data[];

    constructor(service: ModernService) {
        service.recieveData();
        this.startData = service.giveData();
        this.data = this.startData.map(item => ({id: item.data_id, name: item.data_name, login: item.data_login}));
    }

    getData(): Data[] {
        return this.data;
    }
}