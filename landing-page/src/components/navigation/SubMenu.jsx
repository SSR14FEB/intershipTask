import { useNavigationContext } from "./NavigationContext";
function SubMenu({ subMenu }) {
  const { setActiveSubMenuIndex, activeSubMenuIndex } = useNavigationContext();
  const activeSubMenu = subMenu[activeSubMenuIndex];
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
          {activeSubMenu.map((item) => (
            <div key={item[0].name} className="flex w-1/5 flex-col justify-end gap-1">
              {item.map((subItem) => (
                <li
                  key={subItem.name}
                  className="flex list-none items-end gap-1 font-light hover:font-bold"
                >
                  <a href={subItem.link} className="block py-2">
                    {subItem.name}
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
