import { FC, ReactElement } from "react";
import cls from "./AppLink.module.scss";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames";

export enum ThemeLink {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  theme?: ThemeLink;
}

const AppLink: FC<AppLinkProps> = ({
  to,
  theme = ThemeLink.PRIMARY,
  children,
}) => {
  return (
    <Link to={to} className={classNames("app-link", {}, [cls[theme]])}>
      {children}
    </Link>
  );
};

export default AppLink;
