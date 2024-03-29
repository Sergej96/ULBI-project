import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    fromElement?: HTMLElement;
}

const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        fromElement = document.body,
    } = props;
    return createPortal(children, fromElement);
};

export default Portal;
