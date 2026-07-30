import { useState } from "react";
import Navigation from "./Navigation";
const productMenu = [
  { name: "Electrical system", link: "#" },
  { name: "Van conversion", link: "#" },
  { name: "Shop", link: "#" },
];
const utilityMenu = [
  { name: "ABOUT US", link: "#" },
  { name: "Shop", link: "#" },
  { name: "Testimonial", link: "#" },
  { name: "🇮🇳", link: "#" },
  { name: "₹", link: "#" },
];

const menu = [
  [
    { name: "Electrical design", link: "#", pro: true },
    { name: "Electrical guide ", link: "#" },
    { name: "Articles", link: "#" },
    { name: "Kits", link: "#", new: true },
  ],
  [
    { name: "The Van Conversion Bible", link: "#" },
    { name: "Van guide ", link: "#" },
    { name: "Articles", link: "#" },
    { name: "Layout configurator", link: "#" },
    { name: "Shopping tool", link: "#" },
  ],
  [
    { name: "Books", link: "#" },
    { name: "Batteries ", link: "#" },
    { name: "Solar", link: "#" },
    { name: "Charge & convert", link: "#" },
    { name: "Accessories", link: "#" },
    { name: "Appliances", link: "#" },
    { name: "Kits", link: "#", new: true },
  ],
];
function Header() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <header className="flex h-28 w-screen flex-col items-center justify-between bg-gray-200 pb-1">
      <Navigation>
        {/* top bar */}
        <Navigation.topBar
          productMenu={productMenu}
          utilityMenu={utilityMenu}
          setActiveTabIndex={setActiveTabIndex}
          activeTabIndex={activeTabIndex}
          menu={menu}
        />
        <Navigation.menu
          menu={menu[activeTabIndex]}
          logo={"src/assets/Nohma_logo_split_1-2-59_e3z182.png"}
          isActive={true}
        />
      </Navigation>
    </header>
  );
}

export default Header;
