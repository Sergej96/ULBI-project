import { FC } from 'react';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.navbar} />
    );
};

export default Navbar;
