function Navigation({ children }) {
  return <>{children}</>;
}
function TopBar({ productMenu, utilityMenu, setActiveTabIndex, activeTabIndex }) {
  return (
    <div className="flex h-9 w-full items-center text-sm">
      <nav className="ml-52 flex h-full w-full items-center">
        {productMenu.map((item, index) => (
          <li
            className={`bl-1 flex h-full list-none items-center border-r border-l border-gray-300 pr-8 pl-8 text-center font-extralight hover:font-bold ${activeTabIndex == index ? "border-t-2 border-orange-500 bg-white font-bold" : ""}`}
            onClick={() => setActiveTabIndex(index)}
          >
            <a key={item.name} href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </nav>
      <nav className="flex h-full w-full items-center justify-end">
        {utilityMenu.map((item) => (
          <li className="list-none border border-gray-300 p-2 pr-8 pl-8 hover:font-bold">
            <a key={item.name} href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </nav>
    </div>
  );
}
function Menu({ menu, logo }) {
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
            {menu.map((item) => (
              <li className="flex list-none items-end gap-1 font-light hover:font-bold">
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

Navigation.topBar = TopBar;
Navigation.menu = Menu;

export default Navigation;
