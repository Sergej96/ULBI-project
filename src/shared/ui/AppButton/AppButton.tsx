import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    INVERTED_COLOR='invertedColor',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

const AppButton: FC<AppButtonProps> = ({
    children,
    className,
    theme = ButtonTheme.CLEAR,
    square = false,
    size = ButtonSize.M,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };
    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [
                cls[theme],
                cls[size],
                className,
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default AppButton;
