import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import AppButton from '../AppButton/AppButton';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DEFAULT ? <LightIcon /> : <DarkIcon />}
        </AppButton>
    );
});

export default ThemeSwitcher;
