import { useNavigationContext } from "./NavigationContext";
function SubMenu({ subMenu }) {
  const { setActiveSubMenuIndex, activeSubMenuIndex, activeTabIndex } = useNavigationContext();
  const menu = subMenu[activeTabIndex];
  const activeSubMenu = menu[activeSubMenuIndex];
  if (!activeSubMenu) {
    return null;
  }
  return (
    <div
      className="flex h-68 w-screen items-center gap-10 bg-white"
      onMouseLeave={() => setActiveSubMenuIndex(-1)}
    >
      <div className="flex h-68 w-full items-center">
        <nav className="mt-3 flex h-68 w-full items-start gap-18 pt-2 pl-18 text-sm">
          {activeSubMenu.columns.map((column) => (
            <div key={column.name} className="flex w-1/5 flex-col justify-end gap-1">
              <div className="w-full border-b border-yellow-300 pb-2">
                <h1 className="text-lg font-bold">{column.heading}</h1>
              </div>
              {column.items.map((item, index) => (
                <li className="flex list-none items-end gap-1 font-light hover:font-bold">
                  <a href={item.link} className="block py-2">
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
