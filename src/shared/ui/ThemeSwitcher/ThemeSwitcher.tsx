import { FC } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import AppButton from "../AppButton/AppButton";
import { classNames } from "shared/lib/helpers/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DEFAULT ? <LightIcon /> : <DarkIcon />}
    </AppButton>
  );
};

export default ThemeSwitcher;
