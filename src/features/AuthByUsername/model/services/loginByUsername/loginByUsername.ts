import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login',
                authData,
            );

            if (response.data) {
                localStorage.setItem(
                    USER_LOCALSTORAGE_KEY,
                    JSON.stringify(response.data),
                );
                thunkAPI.dispatch(userActions.setUserData(response.data));

                return response.data;
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
