import { ButtonHTMLAttributes, FC, HTMLAttributes } from "react";
import cls from "./AppButton.module.scss";
import { classNames } from "shared/lib/helpers/classNames";
import { log } from "console";

export enum ThemeButton {
  CLEAR = "clear",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
}

const AppButton: FC<AppButtonProps> = ({
  children,
  className,
  theme = ThemeButton.CLEAR,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default AppButton;
