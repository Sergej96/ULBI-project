import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('test getCounter', () => {
    test('should return counter value', () => {
        const state: Partial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema));
    });
});
