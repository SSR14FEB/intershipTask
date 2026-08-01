import { useState } from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";
import SubMenu from "./SubMenu";
import NavigationContext from "./NavigationContext";
import type { ReactNode } from "react";
interface NavigationProps {
  children: ReactNode;
}

function Navigation({ children }: NavigationProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(-1);
  return (
    <NavigationContext.Provider
      value={{
        activeTabIndex,
        setActiveTabIndex,
        activeSubMenuIndex,
        setActiveSubMenuIndex,
      }}
    >
      <header>{children}</header>
    </NavigationContext.Provider>
  );
}
Navigation.topBar = TopBar;
Navigation.menu = Menu;
Navigation.subMenu = SubMenu;
export default Navigation;
