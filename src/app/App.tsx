import './styles/index.scss';
import 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/helpers/classNames';
import { Navbar, Sidebar } from 'widgets';
import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

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
