import { useNavigationContext } from "./NavigationContext";
import type { SubMenuInterface } from "../data/navigationData";

interface SubMenuProps {
  subMenu: SubMenuInterface[][];
}

function SubMenu({ subMenu }: SubMenuProps) {
  const { setActiveSubMenuIndex, activeSubMenuIndex, activeTabIndex } = useNavigationContext();

  const menu = subMenu[activeTabIndex] ?? [];
  const activeSubMenu = menu[activeSubMenuIndex];

  if (!activeSubMenu) {
    return null;
  }

  return (
    <div
      className="h-68 w-full items-center gap-10 bg-white md:flex"
      onMouseLeave={() => setActiveSubMenuIndex(-1)}
    >
      <div className="flex h-68 w-full items-center">
        <nav className="mt-3 flex h-68 w-full items-start gap-6 px-6 pt-2 text-sm lg:gap-18 lg:pl-18">
          {activeSubMenu.columns.map((column) => (
            <div key={column.heading} className="flex w-1/5 flex-col justify-end gap-1">
              <div className="w-full border-b border-yellow-300 pb-2">
                <h1 className="text-lg font-bold">{column.heading}</h1>
              </div>
              {column.items.map((item, index) => (
                <li className="flex list-none items-end gap-1 font-light">
                  <a href={item.link} className="block py-2 hover:font-bold">
                    {item.name}
                  </a>
                </li>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
export default SubMenu;
