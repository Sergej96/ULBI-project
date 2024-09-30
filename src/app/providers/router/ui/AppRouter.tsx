import { getUserAuthData } from 'entities/User';
import React, { Suspense, memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(
        () =>
            Object.values(routeConfig).filter((route) => {
                if (route.authOnly && !isAuth) {
                    return false;
                }
                return true;
            }),
        [isAuth],
    );

    const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRoutesProps) => {
        const component = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{element}</div>
            </Suspense>
        );
        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth>{component}</RequireAuth> : component}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
