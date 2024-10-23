import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    block: ArticleTextBlock;
    className?: string;
}

export const ArticleTextBlockComponent = memo(
    ({ block, className }: ArticleTextBlockComponentProps) => (
        <div className={classNames(cls.root, {}, [className])}>
            {block.title && <Text className={cls.title} title={block.title} />}
            {block.paragraphs.map((p) => (
                <Text className={cls.paragraph} key={p} text={p} />
            ))}
        </div>
    ),
);
