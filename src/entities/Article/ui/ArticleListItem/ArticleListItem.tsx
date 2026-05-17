import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

type ArticleListItemProps = {
  article: Article
  view: ArticleView
  isLoading?: boolean
  className?: string
}

export const ArticleListItem: FC<ArticleListItemProps> = ({ className, article, view, isLoading }) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const types = <Text text={article.type.join(', ')} className={cls.types} />;
      const views = (
          <>
              <Text text={String(article.views)} className={cls.views} />
              <Icon Svg={EyeIcon} />
          </>
      );
  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  if (view === ArticleView.GRID) {
    return (
        <div className={classNames(cls.grid, {}, [className, cls.article])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imgWrapper}>
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <Text className={cls.date} text={article.createdAt} />
                </div>
                <div className={cls.inforWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title} />
            </Card>
        </div>);
  }

  const textBlock = article.blocks.find(
              (block) => block.type === ArticleBlockType.TEXT,
          ) as ArticleTextBlock;
  return (
      <div className={classNames(cls.list, {}, [className, cls.article])}>
          <Card className={cls.card}>
              <div className={cls.header}>
                  <Avatar size={30} src={article.user.avatar} />
                  <Text text={article.user.username} className={cls.username} />
                  <Text text={article.createdAt} className={cls.date} />
              </div>
              <Text className={cls.title} text={article.title} />
              {types}
              <img src={article.img} className={cls.img} alt={article.title} />
              {textBlock && (
              <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
              <div className={cls.footer}>
                  <Button onClick={onOpenArticle}>
                      {t('Читать далее...')}
                  </Button>
                  {views}
              </div>
          </Card>
      </div>);
};
