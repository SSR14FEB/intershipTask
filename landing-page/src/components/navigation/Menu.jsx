import { useNavigationContext } from "./NavigationContext";
function Menu({ menu, logo }) {
  const { setActiveSubMenuIndex, activeTabIndex } = useNavigationContext();
  const activeMenu = menu[activeTabIndex];
  return (
    <>
      <div className="flex h-full w-screen items-center gap-10 bg-white">
        <div className="flex h-full items-center gap-1">
          <img src={logo} alt="404" className="ml-5 box-content w-8" />
          <p className="text-4xl font-bold">
            nohma<span className="text-sm font-light">.com</span>
          </p>
        </div>
        <div className="flex h-full w-full items-center">
          <nav className="mt-3 flex h-full items-center gap-18 pl-8 text-sm">
            {activeMenu.map((item, index) => (
              <li
                key={item.name}
                className="flex list-none items-end gap-1 font-light hover:font-bold"
                onMouseEnter={() => setActiveSubMenuIndex(index)}
              >
                <a href={item.link}>
                  {item.name}
                  {item.pro ? (
                    <span className="ml-2 rounded-4xl bg-gray-300 pt-1 pr-2 pb-1 pl-2 text-center text-sm font-light text-orange-400">
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
