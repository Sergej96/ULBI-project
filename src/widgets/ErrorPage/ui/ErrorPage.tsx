import { FC } from 'react';
import AppButton from 'shared/ui/AppButton/AppButton';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.scss';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const reloadPage = () => {
        navigate(0);
    };
    return (
        <div className={classNames('app', {}, [cls.ErrorPage])}>
            <h1 className={cls.title}>{t('error_page')}</h1>
            <AppButton onClick={reloadPage}>{t('reload_page')}</AppButton>
        </div>
    );
};

export default ErrorPage;
