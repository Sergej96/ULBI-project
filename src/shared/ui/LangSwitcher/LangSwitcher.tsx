import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import AppButton from '../AppButton/AppButton';

interface LangSwitcherProps {
  className?: string,
  short?: boolean
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();
    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <AppButton
            className={classNames(cls.langSwitcher, {}, [className])}
            onClick={onToggle}
        >
            {short ? t('lang_button_short') : t('lang_button')}
        </AppButton>
    );
};

export default LangSwitcher;
