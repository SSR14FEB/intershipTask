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
      className="flex h-full w-full flex-col text-sm md:h-9 md:w-full md:flex-row md:items-center md:justify-center lg:items-center lg:gap-10"
      onMouseEnter={() => setActiveSubMenuIndex(-1)}
    >
      <nav className="flex h-full w-full flex-col gap-5 pt-5 pb-5 lg:ml-52 md:flex-row md:items-center md:justify-start md:gap-0 md:pt-0 md:pb-0">
        {productMenu.map((item, index) => (
          <li
            key={item.name}
            className={`bl-1 flex h-full w-full list-none items-center pr-8 pl-8 justify-center font-medium hover:font-bold md:border-l md:border-gray-300 ${index == productMenu.length - 1 ? "md:border-r" : ""} ${activeTabIndex == index ? "md:border-t-2 md:border-orange-500 md:bg-white md:font-bold" : "md:font-extralight"} `}
            onClick={() => setActiveTabIndex(index)}
          >
            <a
              className="flex items-center gap-1 whitespace-nowrap lg:flex lg:flex-col lg:gap-0"
              href={item.link}
            >
              {item.name.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="block h-4">
                  {word}
                  <br className="hidden lg:block" />
                </span>
              ))}
            </a>
          </li>
        ))}
      </nav>
      <hr className="border-gray-300 md:hidden"></hr>
      <nav className="flex h-full w-full flex-col pt-2 md:flex-row md:items-center md:justify-end md:pt-0">
        {/* this need to be fixed  */}
        {utilityMenu.map((item, index) => (
          <li
            key={item.name}
            className={`list-none border-l border-gray-300 pt-2 pr-8 pb-5 pl-8 font-extralight hover:font-bold md:pt-0 md:pb-0 md:font-semibold ${index == utilityMenu.length - 1 ? "border-r" : "b"} `}
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
