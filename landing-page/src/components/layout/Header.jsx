import Navigation from "../navigation/Navigation";
import { productMenu, utilityMenu, menu, electricalSystem, vanConversion, shop } from "../data/navigationData"
function Header() {
  return (
    <header className="flex h-full w-screen flex-col items-center justify-between bg-gray-200 pb-1">
      <Navigation>
        {/* top bar */}
        <Navigation.topBar
          productMenu={productMenu}
          utilityMenu={utilityMenu}
        />
        <Navigation.menu
          menu={menu}
          logo={"src/assets/Nohma_logo_split_1-2-59_e3z182.png"}
        />
        <Navigation.subMenu
          electricalSystem={electricalSystem}
          vanConversion={vanConversion}
          shop={shop}
        />
      </Navigation>
    </header>
  );
}

export default Header;
