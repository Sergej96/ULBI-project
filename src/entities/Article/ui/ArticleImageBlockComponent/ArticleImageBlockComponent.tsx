import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock;
    className?: string;
}

export const ArticleImageBlockComponent = memo(
    ({ block, className }: ArticleImageBlockComponentProps) => (
        <figure className={classNames(cls.root, {}, [className])}>
            <img className={cls.img} src={block.src} alt={block.title} />
            {block.title && (
                <figcaption className={cls.imgTitle}>
                    <Text text={block.title} align={TextAlign.CENTER} />
                </figcaption>
            )}
        </figure>
    ),
);
