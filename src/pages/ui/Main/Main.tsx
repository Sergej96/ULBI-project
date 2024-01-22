import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation('main');
  return <div>{t('title')}</div>;
}

export default Main;
