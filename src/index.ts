import FactoryMethod from './factory_method';
import LightWeight from './lightweight';
import Builder from './builder';

const main = (): void => {
    const lightWeightInstance = new LightWeight();
    const factoryMethodInstance = new FactoryMethod();
    const builder = new Builder();
}

main();