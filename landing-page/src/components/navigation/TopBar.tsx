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
      className="flex h-full w-screen flex-col text-sm md:h-9 md:flex-row md:items-center md:justify-between md:gap-10"
      onMouseEnter={() => setActiveSubMenuIndex(-1)}
    >
      <nav className="flex h-full w-full flex-col gap-5 pt-5 pb-5 md:ml-52 md:flex-row md:items-center md:justify-start md:gap-0 md:pt-0 md:pb-0">
        {productMenu.map((item, index) => (
          <li
            key={item.name}
            className={`bl-1 flex h-full list-none items-center border-l border-gray-300 pr-8 pl-8 text-center hover:font-bold ${index == productMenu.length - 1 ? "border-r" : ""} ${activeTabIndex == index ? "md:border-t-2 md:border-orange-500 md:bg-white md:font-bold" : "font-extralight"}`}
            onClick={() => setActiveTabIndex(index)}
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </nav>
      <hr className="border-gray-300 md:hidden"></hr>
      <nav className="flex h-full w-full flex-col pt-2 md:flex-row md:justify-end md:pt-0 md:items-center">
        {utilityMenu.map((item, index) => (
          <li
            key={item.name}
            className={`list-none border-l border-gray-300 pt-2 pb-5 pr-8 pl-8 md:pt-0 md:pb-0 md:font-semibold font-extralight hover:font-bold ${index == utilityMenu.length - 1 ? "border-r" : ""} `}
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
        <hr className="border-gray-300 md:hidden"></hr>
      </nav>
    </div>
  );
}
export default TopBar;
