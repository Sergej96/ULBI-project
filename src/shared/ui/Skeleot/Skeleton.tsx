import { CSSProperties, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    radius?: string | number;
}

export const Skeleton: FC<SkeletonProps> = memo(
    ({ className, width, height, radius }: SkeletonProps) => {
        const styles: CSSProperties = {
            width,
            height,
            borderRadius: radius,
        };
        return <div style={styles} className={classNames(cls.root, {}, [className])} />;
    },
);
