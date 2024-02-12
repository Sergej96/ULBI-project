import { Main } from 'pages';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets';

function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                <Routes>
                    {routeConfig.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                    <Route path="*" element={<Main />} />
                </Routes>
            </div>
        </Suspense>
    );
}

export default AppRouter;
