import { FC } from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum ThemeLink {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme?: ThemeLink;
}

const AppLink: FC<AppLinkProps> = ({
    to,
    theme = ThemeLink.PRIMARY,
    children,
}) => (
    <Link to={to} className={classNames('app-link', {}, [cls[theme]])}>
        {children}
    </Link>
);

export default AppLink;
