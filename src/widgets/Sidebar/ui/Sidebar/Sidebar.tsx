import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import AppButton, {
    ButtonSize,
    ButtonTheme,
} from 'shared/ui/AppButton/AppButton';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}
        >
            <div className={cls.menu}>
                <AppLink className={cls.menuItem} to={RoutePath.main}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.menuName}>{t('main')}</span>
                </AppLink>
                <AppLink className={cls.menuItem} to={RoutePath.about}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.menuName}>{t('about')}</span>
                </AppLink>
            </div>
            <AppButton
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.XL}
                square
            >
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className="ps-2" short={collapsed} />
            </div>
        </div>
    );
};

export default Sidebar;
