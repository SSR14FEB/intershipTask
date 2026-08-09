import Navigation from "../navigation/Navigation";
import { productMenu, utilityMenu, menu } from "../data/navigationData";
import subMenuData from "../data/navigationData";
import { Logo } from "../common/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BsHandbag } from "react-icons/bs";
import { useState } from "react";

// Header component for the main navigation bar

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative top-0 z-50 flex h-full w-screen flex-col items-center justify-around pb-0.5 md:sticky md:border-none md:bg-gray-200">
      {/* Mobile menu button */}
      <div className="flex h-full w-screen items-center justify-between bg-white p-4 md:hidden">
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
      <div className={`${isOpen ? "absolute top-full z-50" : "hidden"} w-full md:block`}>
        {/* navigation */}
        <Navigation>
          <Navigation.topBar productMenu={productMenu} utilityMenu={utilityMenu} />
          <Navigation.menu menu={menu} logo={Logo} />
          <Navigation.subMenu subMenu={subMenuData} />
        </Navigation>
      </div>
    </header>
  );
}

export default Header;
