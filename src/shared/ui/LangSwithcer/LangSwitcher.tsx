import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './LangSwitcher.module.scss';
import AppButton from '../AppButton/AppButton';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <AppButton
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={onToggle}
    >
      {t('lang_button')}
    </AppButton>
  );
};

export default LangSwitcher;
