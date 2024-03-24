import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (store, action: PayloadAction<User>) => {
            store.authData = action.payload;
        },
        initUserData: (store) => {
            store.authData = JSON.parse(
                localStorage.getItem(USER_LOCALSTORAGE_KEY),
            );
        },
        logout: (store) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            store.authData = undefined;
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
