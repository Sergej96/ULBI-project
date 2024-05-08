import { FC, FormEvent, useCallback } from 'react';
import cls from './AuthForm.module.scss';
import AppButton, { ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export interface AuthFormProps {
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const AuthForm: FC<AuthFormProps> = ({ onSuccess }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
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
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const result = await dispatch(
                loginByUsername({ username, password }),
            );
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        },
        [dispatch, onSuccess, password, username],
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
