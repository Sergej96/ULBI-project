import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {}

const ArticlesPage: FC<ArticlesPageProps> = () => {
    const { t } = useTranslation('articles');
    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    );
};

export default ArticlesPage;
