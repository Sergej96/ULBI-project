import { FC } from 'react';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={cls.navbar}>
    <div className={cls.links}>
      <AppLink to="/">Main</AppLink>
      <AppLink to="/about">About</AppLink>
    </div>
  </div>
);

export default Navbar;
