import { memo, useState } from 'react';
import cls from './Sidebar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import AppButton, {
    ButtonSize,
    ButtonTheme,
} from 'shared/ui/AppButton/AppButton';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

const Sidebar = memo(() => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}
        >
            <div className={cls.menu}>
                {SidebarItemList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
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
});

export default Sidebar;
