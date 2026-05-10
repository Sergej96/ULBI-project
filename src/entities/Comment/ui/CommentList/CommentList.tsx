import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Comment } from '../../modules/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

type CommentListProps = {
  comments?: Comment[]
  isLoading?: boolean
  error?: string
  className?: string
}

export const CommentLsit = memo(({ comments, isLoading, error, className = '' }: CommentListProps) => {
  const { t } = useTranslation();

  if (error) {
    return <Text text={t('Ошибка загрузка комментариев')} />;
  }

  return (
      <div className={classNames(className)}>
          {comments?.length ?
            comments.map((comment) => <CommentCard comment={comment} isLoading={isLoading} />) :
            <Text text={t('Комментарии отсутсвуют')} />}
      </div>
  );
});
