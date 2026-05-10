import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleot/Skeleton';
import { Comment } from '../../modules/types/comment';
import cls from './CommentCard.module.scss';

type CommentCardProps = {
  comment: Comment
  isLoading?: boolean
  className?: string
}
export const CommentCard = memo(({ comment, isLoading, className = '' }: CommentCardProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
                <Skeleton width={30} height={30} radius="50%" />
                <Skeleton width={100} height={16} />
            </div>
            <Skeleton width="100%" height={50} />
        </div>
    );
  }
  return (
      <div className={classNames(cls.commentCard, {}, [className])}>
          <div className={cls.header}>
              {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
              <Text title={comment.user.username} />
          </div>
          <Text className={cls.commentText} text={comment.text} />
      </div>
  );
});
