import { About, Main, NotFound, Profile } from 'pages';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <Main />,
    },
    {
        path: RoutePath.about,
        element: <About />,
    },
    {
        path: RoutePath.profile,
        element: <Profile />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
];
