import React, { ErrorInfo, ReactNode } from 'react';
import { ErrorPage } from 'widgets';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    static getDerivedStateFromError(error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        // eslint-disable-next-line no-alert
        alert(error.message);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        return hasError ? <ErrorPage /> : children;
    }
}
