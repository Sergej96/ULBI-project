import { render, screen } from '@testing-library/react';
import AppButton, { ThemeButton } from './AppButton';

describe('AppButton', () => {
    test('render button', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('use theme CLEAR', () => {
        render(<AppButton theme={ThemeButton.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
