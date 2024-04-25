import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from './getLoginState';
import { LoginSchema } from '../types/loginSchema';

export const getLoginError = createSelector(
    [getLoginState],
    (store: LoginSchema) => store?.error || '',
);
