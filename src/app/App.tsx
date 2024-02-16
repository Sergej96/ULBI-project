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

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <Navbar />
                <div className="content-page">
                    <button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        toggle
                    </button>
                        <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto laudantium exercitationem minima earum vitae laboriosam distinctio, dignissimos at excepturi eius!
                        </Modal>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
