import { useState } from "react";
import { useNavigationContext } from "./NavigationContext";
import type { MenuItems } from "../data/navigationData";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../common/Logo";

interface MenuProps {
  menu: MenuItems[][];
  logo: string;
}
function Menu({ menu, logo }: MenuProps) {
  const { setActiveSubMenuIndex, activeTabIndex, activeSubMenuIndex } = useNavigationContext();
  const activeMenu = menu[activeTabIndex] ?? [];
  const [isOpen, setIsOpen] = useState(false);
  console.log(activeSubMenuIndex);
  return (
    <>
      <div className="h-full w-full items-center gap-10 bg-white p-4 md:flex md:flex-col md:gap-0 lg:flex lg:flex-row">
        {/* responsive */}

        <div className="hidden h-full w-full items-center justify-between md:flex md:items-center lg:hidden">
          {/* logo */}
          <div className="flex h-full items-center gap-1">
            <img src={Logo} alt="404" className="box-content w-8" />
            <p className="text-4xl font-semibold">
              nohma<span className="text-sm font-light">.com</span>
            </p>
          </div>
          {/* buttons */}
          <div className="mt-2 flex h-8 items-center gap-4">
            <HiOutlineMagnifyingGlass className="cursor-pointer" size={20} />
            <BsHandbag className="cursor-pointer" size={20} />
            <RxHamburgerMenu
              className="cursor-pointer"
              size={20}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        <div className="hidden h-full items-center gap-1 lg:flex">
          <img src={logo} alt="404" className="ml-5 box-content w-8" />
          <p className="text-4xl font-bold">
            nohma<span className="text-sm font-light">.com</span>
          </p>
        </div>
        <div
          className={`hidden h-full w-full items-center lg:ml-9 ${isOpen ? "md:flex md:flex-col md:items-start md:justify-start md:font-bold" : "lg:flex"} `}
        >
          <nav
            className={`mt-4 h-full items-center pl-8 text-sm md:flex md:w-full md:flex-col md:items-start md:gap-4 lg:flex lg:flex-row lg:gap-18`}
          >
            {activeMenu.map((item: MenuItems, index: number) => (
              <li
                key={index}
                className={`flex list-none items-end gap-1 ${activeSubMenuIndex == index ? "font-bold" : "font-light"}`}
              >
                <a
                  key={index}
                  href={item.link}
                  onMouseEnter={() => setActiveSubMenuIndex(index)}
                  onClick={() =>
                    activeSubMenuIndex === index
                      ? setActiveSubMenuIndex(-1)
                      : setActiveSubMenuIndex(index)
                  }
                >
                  {item.name}
                  {item.pro ? (
                    <span className="ml-2 rounded-4xl bg-gray-300 text-center text-sm text-orange-400 md:pt-px md:pr-1 md:pb-px md:pl-1 md:text-xs lg:pt-1 lg:pr-2 lg:pb-1 lg:pl-2">
                      PRO
                    </span>
                  ) : (
                    ""
                  )}
                  {item.new ? (
                    <span className="ml-2 rounded-4xl bg-gray-300 text-center text-sm text-orange-400 md:pt-px md:pr-1 md:pb-px md:pl-1 md:text-xs lg:pt-1 lg:pr-2 lg:pb-1 lg:pl-2">
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
