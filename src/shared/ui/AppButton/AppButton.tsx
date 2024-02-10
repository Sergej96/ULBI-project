import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum ThemeButton {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton;
}

const AppButton: FC<AppButtonProps> = ({
    children,
    className,
    theme = ThemeButton.CLEAR,
    ...otherProps
}) => (
    <button
        type="button"
        className={classNames(cls.button, {}, [cls[theme], className])}
        {...otherProps}
    >
        {children}
    </button>
);

export default AppButton;
