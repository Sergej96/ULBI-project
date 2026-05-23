import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions,
    articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { getArticlesPageError,
    getArticlesPageIsLoading, getArticlesPagePageView } from '../../model/selectors/articlesPageSlecetors';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = () => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPagePageView);
    const error = useSelector(getArticlesPageError);

    const onSelectArticlesView = (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    };

    useInitialEffect(() => {
      dispatch(fetchArticles());
      dispatch(articlesPageActions.initState());
    });
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <div className={cls.header}>
                    <h1>{t('title')}</h1>
                    <ArticleViewSelector activeView={view} onViewClick={onSelectArticlesView} />
                </div>
                <ArticleList articles={articles} isLoading={isLoading} view={view} />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
