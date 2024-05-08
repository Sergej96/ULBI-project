import { FC, memo } from 'react';
import './Loader.scss';

interface LoaderProps {}

const Loader: FC<LoaderProps> = memo(() => (
    <div className="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
));

export default Loader;
