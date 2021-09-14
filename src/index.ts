import FactoryMethod from './factory_method';
import LightWeight from './lightweight';

const main = (): void => {
    const lightWeightInstance = new LightWeight();
    const factoryMethodInstance = new FactoryMethod();
}

main();