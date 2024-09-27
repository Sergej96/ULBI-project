import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidErrors } from './getProfileValidErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidErrors.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidErrors(state as StateSchema)).toEqual(undefined);
    });
});
