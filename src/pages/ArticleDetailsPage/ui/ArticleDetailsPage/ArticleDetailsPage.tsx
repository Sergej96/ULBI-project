import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation('article_details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={cls.root}>
                <Text theme={TextTheme.ERROR} title={t('Статья не найдена')} />
            </div>
        );
    }
    return (
        <div className={cls.root}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
