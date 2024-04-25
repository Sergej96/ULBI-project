import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from './getLoginState';
import { LoginSchema } from '../types/loginSchema';

export const getLoginUsername = createSelector(
    [getLoginState],
    (store: LoginSchema) => store?.username || '',
);
