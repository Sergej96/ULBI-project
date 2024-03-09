import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { Counter } from './Counter';
import { fireEvent, screen } from '@testing-library/react';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });
    test('test click increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });
    test('test click decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        fireEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
