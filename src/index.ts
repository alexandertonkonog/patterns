import FactoryMethod from './factory_method';
import LightWeight from './lightweight';
import Builder from './builder';
import Prototype from './prototype';
import Singletone from './singletone';
import Adapter from './adapter';
import Bridge from './bridge';
import Composite from './composite';

const main = (): void => {
    const lightWeightInstance = new LightWeight();
    const factoryMethodInstance = new FactoryMethod();
    const builder = new Builder();
    const prototype = new Prototype();
    const singletone = new Singletone();
    const adapter = new Adapter();
    const bridge = new Bridge();
    const composite = new Composite();
}

main();