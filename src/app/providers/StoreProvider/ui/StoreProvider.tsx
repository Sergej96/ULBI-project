import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    initialState,
}) => {
    const navigate = useNavigate();
    const store = createReduxStore(initialState, navigate);
    return <Provider store={store}>{children}</Provider>;
};
