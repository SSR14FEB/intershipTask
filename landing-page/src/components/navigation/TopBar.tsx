import { useNavigationContext } from "./NavigationContext";
import type { TopBar } from "../data/navigationData";
interface TopBarProps {
  productMenu: TopBar[];
  utilityMenu: TopBar[];
}
function TopBar({ productMenu, utilityMenu }: TopBarProps) {
  const { setActiveTabIndex, activeTabIndex, setActiveSubMenuIndex } = useNavigationContext();
  return (
    <div
      className="full flex h-full flex-col bg-white text-sm md:h-9 md:flex-row md:items-center md:justify-center md:bg-transparent lg:w-full lg:items-center lg:gap-10"
      onMouseEnter={() => setActiveSubMenuIndex(-1)}
    >
      <nav className="flex h-full w-full flex-col gap-5 pt-4 pb-4 pl-6 md:flex-row md:items-center md:justify-center md:gap-0 md:pt-0 md:pb-0 md:pl-8 lg:pl-55">
        {activeTabIndex == 0 ? "" : <span className="hidden text-gray-300 md:block">|</span>}

        {productMenu.map((item, index) => (
          <li
            key={item.name}
            className={`relative flex h-full w-full list-none items-center font-medium hover:font-bold md:justify-center ${activeTabIndex == index ? "bg-white" : "md:font-light"} `}
            onClick={() => setActiveTabIndex(index)}
          >
            {index == activeTabIndex && (
              <span className="absolute left-0 hidden md:top-0 md:block md:h-0.5 md:w-full md:bg-orange-500"></span>
            )}
            <a
              className="flex w-full items-center whitespace-nowrap md:justify-center md:pr-2 md:pl-2 md:text-xs lg:pr-8 lg:pl-8"
              href={item.link}
            >
              {item.name}
            </a>
            {activeTabIndex == index || activeTabIndex == index + 1 ? (
              ""
            ) : (
              <span className="hidden text-gray-300 md:block">|</span>
            )}
          </li>
        ))}
      </nav>
      <hr className="border-gray-300 md:hidden"></hr>
      <nav className="flex h-full w-full flex-col gap-5 pt-4 pb-4 pl-6 md:flex-row md:items-center md:justify-end md:gap-0 md:pt-0 md:pb-0 md:pl-8 lg:pl-55">
        {utilityMenu.map((item, index) => (
          <li
            key={item.name}
            className={`flex h-full w-full list-none border-r border-gray-300 font-medium`}
          >
            <a
              className="flex items-center font-bold whitespace-nowrap md:pr-4 md:pl-5 md:text-xs lg:pr-8 lg:pl-8"
              href={item.link}
            >
              {item.name}
            </a>
          </li>
        ))}
      </nav>
      <hr className="border-gray-300 md:hidden"></hr>
    </div>
  );
}
export default TopBar;
