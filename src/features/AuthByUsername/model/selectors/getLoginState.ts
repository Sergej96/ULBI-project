import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginState = (store: StateSchema) => store?.loginForm;
