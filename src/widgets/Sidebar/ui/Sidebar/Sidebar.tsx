import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppButton from 'shared/ui/AppButton/AppButton';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}
        >
            <AppButton data-testid="sidebar-toggle" onClick={onToggle}>
                toggle sidebar
            </AppButton>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className="ps-2" />
            </div>
        </div>
    );
};

export default Sidebar;
