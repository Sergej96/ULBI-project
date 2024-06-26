import { memo } from 'react';
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

const AppLink = memo(
    ({ to, theme = ThemeLink.PRIMARY, children, className }: AppLinkProps) => (
        <Link
            to={to}
            className={classNames('app-link', {}, [cls[theme], className])}
        >
            {children}
        </Link>
    ),
);

export default AppLink;
