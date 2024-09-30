import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation('article_details');
    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    );
};

export default ArticleDetailsPage;
