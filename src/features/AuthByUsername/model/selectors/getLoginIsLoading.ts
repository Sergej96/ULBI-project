import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from './getLoginState';
import { LoginSchema } from '../types/loginSchema';

export const getLoginIsLoading = createSelector(
    [getLoginState],
    (store: LoginSchema) => store?.isLoading || false,
);
