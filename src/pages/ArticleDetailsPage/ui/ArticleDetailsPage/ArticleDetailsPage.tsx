import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { CommentLsit } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddNewComment';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { addCommentForArticle } from '../../module/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../module/services/fetchCommentsByArticleId';
import {
    articleDetailsCommentsReducer,
    getArticlesComments } from '../../module/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading } from '../../module/selectors/articleDetailsComments';

interface ArticleDetailsPageProps {}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation('article_details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticlesComments.selectAll);
    const isLoadingComments = useSelector(getArticleDetailsCommentsIsLoading);
    const errorComments = useSelector(getArticleDetailsCommentsError);
    const navigate = useNavigate();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    const onBackToArticles = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <div className={cls.root}>
                <Text theme={TextTheme.ERROR} title={t('Статья не найдена')} />
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cls.root}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToArticles}>
                    {t('Назад к списку статей')}
                </Button>
                <ArticleDetails id={id} />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentLsit comments={comments} isLoading={isLoadingComments} error={errorComments} />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
