import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileValidErrors = (state: StateSchema) => state.profile?.validateErrors;
