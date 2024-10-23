import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    block: ArticleCodeBlock;
    className?: string;
}

export const ArticleCodeBlockComponent = memo(
    ({ block, className }: ArticleCodeBlockComponentProps) => (
        <div className={classNames(cls.root, {}, [className])}>
            <Code>{block.code}</Code>
        </div>
    ),
);
