import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    INVERTED_COLOR = 'invertedColor',
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

const AppButton = memo(
    ({
        children,
        className,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    }: AppButtonProps) => {
        const mods: Record<string, boolean> = {
            [cls.square]: square,
            [cls.disabled]: disabled,
        };
        return (
            <button
                type="button"
                disabled={disabled}
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
    },
);

export default AppButton;
