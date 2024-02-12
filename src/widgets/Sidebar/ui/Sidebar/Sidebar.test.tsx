import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('render component', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
