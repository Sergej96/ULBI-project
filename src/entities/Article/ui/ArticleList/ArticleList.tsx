import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

type ArticleListProps = {
  articles: Article[]
  view?: ArticleView
  isLoading?: boolean
  className?: string
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList: FC<ArticleListProps> = ({ className, articles, view = ArticleView.GRID, isLoading }) => {
  const renderArticle = (article: Article) => (<ArticleListItem key={article.id} article={article} view={view} />);

  if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

  return (
      <div className={classNames(cls.articleList, {}, [className])}>
          {articles.length > 0 ? articles.map(renderArticle) : null}
      </div>);
};
