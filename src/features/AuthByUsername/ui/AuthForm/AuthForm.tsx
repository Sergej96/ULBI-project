import { FC } from 'react';
import cls from './AuthForm.module.scss';
import AppButton, { ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';

interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.authForm}>
            <Input placeholder="Введите userName" autoFocus />
            <Input placeholder="Введите пароль" />
            <AppButton className={cls.loginBtn} theme={ButtonTheme.INVERTED_COLOR}>{t('login')}</AppButton>
        </div>
    );
};

export default AuthForm;
