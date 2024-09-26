import { CSSProperties, FC, ImgHTMLAttributes, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = ({ className, size, ...otherProps }) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );
    return (
        <img
            className={classNames(cls.avatar, {}, [className])}
            style={styles}
            {...otherProps}
            alt={otherProps.alt}
        />
    );
};
