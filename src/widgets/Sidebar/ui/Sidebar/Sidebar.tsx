import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/helpers/classNames";
import AppButton from "shared/ui/AppButton/AppButton";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}>
      <AppButton onClick={onToggle}>toggle sidebar</AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
