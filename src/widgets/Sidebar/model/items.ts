import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'main',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'about',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'profile',
        Icon: ProfileIcon,
    },
];
