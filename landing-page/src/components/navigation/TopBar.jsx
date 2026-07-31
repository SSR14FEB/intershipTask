import { useNavigationContext } from "./NavigationContext";
function TopBar({ productMenu, utilityMenu }) {
  const { setActiveTabIndex, activeTabIndex, setActiveSubMenuIndex } = useNavigationContext();
  return (
    <div
      className="flex h-9 w-full items-center text-sm"
      onMouseEnter={() => setActiveSubMenuIndex(-1)}
    >
      <nav className="ml-52 flex h-full w-full items-center">
        {productMenu.map((item, index) => (
          <li
            key={item.name}
            className={`bl-1 flex h-full list-none items-center border-r border-l border-gray-300 pr-8 pl-8 text-center font-extralight hover:font-bold ${activeTabIndex == index ? "border-t-2 border-orange-500 bg-white font-bold" : ""}`}
            onClick={() => setActiveTabIndex(index)}
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </nav>
      <nav className="flex h-full w-full items-center justify-end">
        {utilityMenu.map((item) => (
          <li
            key={item.name}
            className="list-none border border-gray-300 p-2 pr-8 pl-8 hover:font-bold"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </nav>
    </div>
  );
}
export default TopBar;
