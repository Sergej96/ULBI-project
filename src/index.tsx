import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <StoreProvider>
                <BrowserRouter>
                    <ErrorBoundary>
                        <ThemeProvider>
                            <App />
                        </ThemeProvider>
                    </ErrorBoundary>
                </BrowserRouter>
            </StoreProvider>
        </StrictMode>,
    );
}
