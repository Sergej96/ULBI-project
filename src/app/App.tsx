import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar, Sidebar } from 'widgets';
import { Suspense, useState } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import Modal from 'shared/ui/Modal/Modal';

import 'shared/config/i18n/i18n';
import Portal from 'shared/ui/Portal/Portal';

function App() {
    const { theme } = useTheme();

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
