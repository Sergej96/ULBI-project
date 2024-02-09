import { FC } from 'react';
import './Loader.scss';

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => (
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
);

export default Loader;
