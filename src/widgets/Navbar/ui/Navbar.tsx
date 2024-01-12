import { FC } from "react";
import cls from "./Navbar.module.scss";
import AppLink, { ThemeLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className={cls.navbar}>
      <div className={cls.links}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
