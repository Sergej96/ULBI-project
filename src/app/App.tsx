import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar, Sidebar } from 'widgets';
import { Suspense, useEffect } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import 'shared/config/i18n/i18n';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './providers/StoreProvider/config/store';
import { userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
