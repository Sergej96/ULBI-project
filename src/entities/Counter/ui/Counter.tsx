import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from 'shared/ui/AppButton/AppButton';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {}

export const Counter: FC<CounterProps> = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h2 data-testid="counter-value">{counterValue}</h2>
            <AppButton onClick={increment} data-testid="increment">
                +
            </AppButton>
            <AppButton onClick={decrement} data-testid="decrement">
                -
            </AppButton>
        </div>
    );
};
