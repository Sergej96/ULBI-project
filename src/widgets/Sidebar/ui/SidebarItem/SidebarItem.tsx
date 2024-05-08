import { memo } from 'react';
import cls from './SidebarItem.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            className={classNames(cls.menuItem, {
                [cls.collapsed]: collapsed,
            })}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.menuName}>{t(item.text)}</span>
        </AppLink>
    );
});
