import { FC, FormEvent, useCallback } from 'react';
import cls from './AuthForm.module.scss';
import AppButton, { ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';

export interface AuthFormProps {}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const AuthForm: FC<AuthFormProps> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onSubmitLogin = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            dispatch(loginByUsername({ username, password }));
        },
        [dispatch, password, username],
    );

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <form className={cls.authForm} onSubmit={onSubmitLogin}>
                <h2>{t('auth_modal_title')}</h2>
                {error && <p>{error}</p>}
                <Input
                    placeholder="Введите userName"
                    onChange={onChangeUsername}
                    autoFocus
                    value={username}
                />
                <Input
                    placeholder="Введите пароль"
                    onChange={onChangePassword}
                />
                <AppButton
                    type="submit"
                    className={cls.loginBtn}
                    theme={ButtonTheme.INVERTED_COLOR}
                    value={password}
                    disabled={isLoading}
                >
                    {t('login')}
                </AppButton>
            </form>
        </DynamicModuleLoader>
    );
};

export default AuthForm;
