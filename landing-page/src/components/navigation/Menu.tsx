import { useRef } from "react";
import { useNavigationContext } from "./NavigationContext";
import type { MenuItems } from "../data/navigationData";

interface MenuProps {
  menu: MenuItems[][];
  logo: string;
}
function Menu({ menu, logo }: MenuProps) {
  const { setActiveSubMenuIndex, activeTabIndex, activeSubMenuIndex } = useNavigationContext();
  const activeMenu = menu[activeTabIndex] ?? [];
  return (
    <>
      <div className="hidden h-full w-screen items-center gap-10 bg-white p-4 lg:flex">
        <div className="flex h-full items-center gap-1">
          <img src={logo} alt="404" className="ml-5 box-content w-8" />
          <p className="text-4xl font-bold">
            nohma<span className="text-sm font-light">.com</span>
          </p>
        </div>
        <div className="flex h-full w-full items-center">
          <nav className="mt-4 flex h-full items-center gap-18 pl-8 text-sm">
            {activeMenu.map((item: MenuItems, index: number) => (
              <li
                key={index}
                className={`flex list-none items-end gap-1 hover:font-bold ${activeSubMenuIndex == index ? "font-bold" : "font-light"}`}
                onMouseEnter={() => setActiveSubMenuIndex(index)}
              >
                <a href={item.link}>
                  {item.name}
                  {item.pro ? (
                    <span className="ml-2 rounded-4xl bg-gray-300 pt-1 pr-2 pb-1 pl-2 text-center text-sm text-orange-400">
                      PRO
                    </span>
                  ) : (
                    ""
                  )}
                  {item.new ? (
                    <span className="ml-2 rounded-4xl bg-gray-300 pt-1 pr-2 pb-1 pl-2 text-center text-sm font-light text-orange-400">
                      NEW
                    </span>
                  ) : (
                    ""
                  )}
                </a>
              </li>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
export default Menu;
