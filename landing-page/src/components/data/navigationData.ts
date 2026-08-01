export interface MenuItems {
  name: string;
  link: string;
  pro: boolean;
  new: boolean;
}
interface electricalSystem {}

export const productMenu: MenuItems[][] = [
  { name: "Electrical system", link: "#" },
  { name: "Van conversion", link: "#" },
  { name: "Shop", link: "#" },
];

export const utilityMenu: MenuItems[][] = [
  { name: "ABOUT US", link: "#" },
  { name: "Shop", link: "#" },
  { name: "Testimonial", link: "#" },
  { name: "🇮🇳", link: "#" },
  { name: "₹", link: "#" },
];

export const menu: MenuItems[][] = [
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

export interface SubMenuItems {
  name: string;
  link: string;
}

export interface SubMenuColumns {
  heading: string;
  items: SubMenuItems[];
}
export interface SubMenuInterface {
  name: string;
  columns: SubMenuColumns[];
}
const electricalSystem = [
  {
    name: "Electrical system",
    columns: [
      {
        heading: "Electrical system",
        items: [
          { name: "12V Electrical Basics", link: "" },
          { name: "Wiring Diagrams", link: "" },
          { name: "Battery Systems", link: "" },
          { name: "Solar Power", link: "" },
          { name: "Inverters & Chargers", link: "" },
        ],
      },
      {
        heading: "Filter",
        items: [
          { name: "Solar Power", link: "" },
          { name: "Inverters & Chargers", link: "" },
          { name: "Fuse & Circuit Protection", link: "" },
          { name: "Shore Power", link: "" },
          { name: "Troubleshooting", link: "" },
        ],
      },
      {
        heading: "Kits",
        items: [
          { name: "Shore Power", link: "" },
          { name: "Troubleshooting", link: "" },
          { name: "12V Electrical Basics", link: "" },
        ],
      },
    ],
  },

  {
    name: "Electrical Guide",
    columns: [
      {
        heading: "Electrical Guide",
        items: [
          { name: "Beginner's Guide", link: "" },
          { name: "Choosing Components", link: "" },
          { name: "Cable Sizing", link: "" },
          { name: "Battery Calculator", link: "" },
          { name: "Installation Tips", link: "" },
        ],
      },
      {
        heading: "Filter",
        items: [
          { name: "Maintenance", link: "" },
          { name: "Safety Checklist", link: "" },
          { name: "FAQs", link: "" },
          { name: "Component Guide", link: "" },
          { name: "Best Practices", link: "" },
        ],
      },
      {
        heading: "Kits",
        items: [
          { name: "Battery Calculator", link: "" },
          { name: "Cable Size Chart", link: "" },
          { name: "Voltage Drop Calculator", link: "" },
        ],
      },
    ],
  },

  {
    name: "Articles",
    columns: [
      {
        heading: "Articles",
        items: [
          { name: "Latest Articles", link: "" },
          { name: "How-To Guides", link: "" },
          { name: "Product Reviews", link: "" },
          { name: "Case Studies", link: "" },
          { name: "DIY Projects", link: "" },
        ],
      },
      {
        heading: "Filter",
        items: [
          { name: "Van Life Tips", link: "" },
          { name: "Industry News", link: "" },
          { name: "Expert Advice", link: "" },
          { name: "Buying Guides", link: "" },
          { name: "Interviews", link: "" },
        ],
      },
      {
        heading: "Kits",
        items: [
          { name: "Editor's Picks", link: "" },
          { name: "Popular Posts", link: "" },
          { name: "Recent Updates", link: "" },
        ],
      },
    ],
  },

  {
    name: "Kits",
    columns: [
      {
        heading: "Kits",
        items: [
          { name: "Starter Kits", link: "" },
          { name: "Off-Grid Kits", link: "" },
          { name: "Solar Kits", link: "" },
          { name: "Premium Kits", link: "" },
          { name: "Custom Kits", link: "" },
        ],
      },
      {
        heading: "Filter",
        items: [
          { name: "Upgrade Packs", link: "" },
          { name: "Accessories", link: "" },
          { name: "Bundle Deals", link: "" },
          { name: "Best Sellers", link: "" },
          { name: "New Arrivals", link: "" },
        ],
      },
      {
        heading: "Kits",
        items: [
          { name: "Installation Guide", link: "" },
          { name: "Warranty", link: "" },
          { name: "FAQs", link: "" },
        ],
      },
    ],
  },
];

const vanConversion = [
  {
    name: "The Van Conversion Bible",
    columns: [
      {
        heading: "The Van Conversion Bible",
        items: [
          { name: "Getting Started", link: "" },
          { name: "Planning Your Build", link: "" },
          { name: "Materials & Tools", link: "" },
          { name: "Step-by-Step Chapters", link: "" },
          { name: "Expert Tips", link: "" },
        ],
      },
      {
        heading: "Resources",
        items: [
          { name: "Free Sample Chapter", link: "" },
          { name: "Book Updates", link: "" },
          { name: "FAQs", link: "" },
          { name: "Community Reviews", link: "" },
          { name: "Support", link: "" },
        ],
      },
      {
        heading: "Shop",
        items: [
          { name: "Paperback Edition", link: "" },
          { name: "Digital Edition", link: "" },
          { name: "Bundle Offers", link: "" },
        ],
      },
    ],
  },

  {
    name: "Van Guide",
    columns: [
      {
        heading: "Van Guide",
        items: [
          { name: "Choosing a Van", link: "" },
          { name: "Budget Planning", link: "" },
          { name: "Build Timeline", link: "" },
          { name: "Essential Tools", link: "" },
          { name: "Beginner Checklist", link: "" },
        ],
      },
      {
        heading: "Categories",
        items: [
          { name: "Insulation", link: "" },
          { name: "Electrical", link: "" },
          { name: "Plumbing", link: "" },
          { name: "Furniture", link: "" },
          { name: "Heating", link: "" },
        ],
      },
      {
        heading: "Downloads",
        items: [
          { name: "Build Checklist", link: "" },
          { name: "Budget Planner", link: "" },
          { name: "Material List", link: "" },
        ],
      },
    ],
  },

  {
    name: "Articles",
    columns: [
      {
        heading: "Articles",
        items: [
          { name: "Latest Articles", link: "" },
          { name: "How-To Guides", link: "" },
          { name: "Build Stories", link: "" },
          { name: "Product Reviews", link: "" },
          { name: "Maintenance Tips", link: "" },
        ],
      },
      {
        heading: "Categories",
        items: [
          { name: "DIY", link: "" },
          { name: "Off-Grid Living", link: "" },
          { name: "Travel", link: "" },
          { name: "Buying Guides", link: "" },
          { name: "Inspiration", link: "" },
        ],
      },
      {
        heading: "Featured",
        items: [
          { name: "Editor's Picks", link: "" },
          { name: "Most Popular", link: "" },
          { name: "Recent Posts", link: "" },
        ],
      },
    ],
  },

  {
    name: "Layout Configurator",
    columns: [
      {
        heading: "Layout Configurator",
        items: [
          { name: "Choose Your Van", link: "" },
          { name: "Select Layout", link: "" },
          { name: "Furniture Options", link: "" },
          { name: "Kitchen Designs", link: "" },
          { name: "Bedroom Layouts", link: "" },
        ],
      },
      {
        heading: "Features",
        items: [
          { name: "Storage Options", link: "" },
          { name: "Garage Space", link: "" },
          { name: "Bathroom Layouts", link: "" },
          { name: "Window Placement", link: "" },
          { name: "Lighting", link: "" },
        ],
      },
      {
        heading: "Tools",
        items: [
          { name: "Save Layout", link: "" },
          { name: "Compare Designs", link: "" },
          { name: "Export PDF", link: "" },
        ],
      },
    ],
  },

  {
    name: "Shopping Tool",
    columns: [
      {
        heading: "Shopping Tool",
        items: [
          { name: "Electrical Components", link: "" },
          { name: "Plumbing Parts", link: "" },
          { name: "Windows & Vents", link: "" },
          { name: "Insulation", link: "" },
          { name: "Furniture", link: "" },
        ],
      },
      {
        heading: "Collections",
        items: [
          { name: "Starter Packs", link: "" },
          { name: "Best Sellers", link: "" },
          { name: "New Arrivals", link: "" },
          { name: "Premium Products", link: "" },
          { name: "Budget Picks", link: "" },
        ],
      },
      {
        heading: "Support",
        items: [
          { name: "Buying Guide", link: "" },
          { name: "Compare Products", link: "" },
          { name: "FAQs", link: "" },
        ],
      },
    ],
  },
];

const shop = [
  {
    name: "Books",
    columns: [
      {
        heading: "Books",
        items: [
          { name: "The Van Conversion Bible", link: "" },
          { name: "Electrical Guide", link: "" },
          { name: "Solar Handbook", link: "" },
          { name: "Off-Grid Living", link: "" },
          { name: "Maintenance Guide", link: "" },
        ],
      },
      {
        heading: "Popular",
        items: [
          { name: "Best Sellers", link: "" },
          { name: "New Releases", link: "" },
          { name: "Editor's Picks", link: "" },
          { name: "Bundles", link: "" },
          { name: "Gift Ideas", link: "" },
        ],
      },
      {
        heading: "Resources",
        items: [
          { name: "Reading Guide", link: "" },
          { name: "Free Samples", link: "" },
          { name: "FAQs", link: "" },
        ],
      },
    ],
  },

  {
    name: "Batteries",
    columns: [
      {
        heading: "Batteries",
        items: [
          { name: "Lithium Batteries", link: "" },
          { name: "AGM Batteries", link: "" },
          { name: "Gel Batteries", link: "" },
          { name: "Battery Monitors", link: "" },
          { name: "Battery Boxes", link: "" },
        ],
      },
      {
        heading: "Brands",
        items: [
          { name: "Victron", link: "" },
          { name: "Renogy", link: "" },
          { name: "EcoFlow", link: "" },
          { name: "Battle Born", link: "" },
          { name: "Fogstar", link: "" },
        ],
      },
      {
        heading: "Support",
        items: [
          { name: "Buying Guide", link: "" },
          { name: "Installation", link: "" },
          { name: "Warranty", link: "" },
        ],
      },
    ],
  },

  {
    name: "Solar",
    columns: [
      {
        heading: "Solar",
        items: [
          { name: "Solar Panels", link: "" },
          { name: "Flexible Panels", link: "" },
          { name: "Rigid Panels", link: "" },
          { name: "Portable Panels", link: "" },
          { name: "Mounting Kits", link: "" },
        ],
      },
      {
        heading: "Accessories",
        items: [
          { name: "Solar Cables", link: "" },
          { name: "MC4 Connectors", link: "" },
          { name: "Mounts", link: "" },
          { name: "Roof Glands", link: "" },
          { name: "Fuses", link: "" },
        ],
      },
      {
        heading: "Support",
        items: [
          { name: "Solar Calculator", link: "" },
          { name: "Installation Guide", link: "" },
          { name: "FAQs", link: "" },
        ],
      },
    ],
  },

  {
    name: "Charge & convert",
    columns: [
      {
        heading: "Charge & Convert",
        items: [
          { name: "Inverters", link: "" },
          { name: "Battery Chargers", link: "" },
          { name: "DC-DC Chargers", link: "" },
          { name: "MPPT Controllers", link: "" },
          { name: "Shore Power", link: "" },
        ],
      },
      {
        heading: "Components",
        items: [
          { name: "Fuse Boxes", link: "" },
          { name: "Bus Bars", link: "" },
          { name: "Breakers", link: "" },
          { name: "Relays", link: "" },
          { name: "Switches", link: "" },
        ],
      },
      {
        heading: "Support",
        items: [
          { name: "Sizing Guide", link: "" },
          { name: "Compatibility", link: "" },
          { name: "FAQs", link: "" },
        ],
      },
    ],
  },

  {
    name: "Accessories",
    columns: [
      {
        heading: "Accessories",
        items: [
          { name: "Cables", link: "" },
          { name: "Connectors", link: "" },
          { name: "Fuse Holders", link: "" },
          { name: "Cable Ties", link: "" },
          { name: "Tools", link: "" },
        ],
      },
      {
        heading: "Essentials",
        items: [
          { name: "Heat Shrink", link: "" },
          { name: "Lugs", link: "" },
          { name: "Crimpers", link: "" },
          { name: "Multimeters", link: "" },
          { name: "Labels", link: "" },
        ],
      },
      {
        heading: "Support",
        items: [
          { name: "Tool Guide", link: "" },
          { name: "Installation Tips", link: "" },
          { name: "FAQs", link: "" },
        ],
      },
    ],
  },

  {
    name: "Appliances",
    columns: [
      {
        heading: "Appliances",
        items: [
          { name: "Fridges", link: "" },
          { name: "Fans", link: "" },
          { name: "Water Pumps", link: "" },
          { name: "Heaters", link: "" },
          { name: "Lighting", link: "" },
        ],
      },
      {
        heading: "Categories",
        items: [
          { name: "Kitchen", link: "" },
          { name: "Comfort", link: "" },
          { name: "Water", link: "" },
          { name: "Heating", link: "" },
          { name: "Electrical", link: "" },
        ],
      },
      {
        heading: "Support",
        items: [
          { name: "Buying Guide", link: "" },
          { name: "Installation", link: "" },
          { name: "Warranty", link: "" },
        ],
      },
    ],
  },

  {
    name: "Kits",
    columns: [
      {
        heading: "Kits",
        items: [
          { name: "Starter Kits", link: "" },
          { name: "Solar Kits", link: "" },
          { name: "Off-Grid Kits", link: "" },
          { name: "Premium Kits", link: "" },
          { name: "Custom Kits", link: "" },
        ],
      },
      {
        heading: "Collections",
        items: [
          { name: "Best Sellers", link: "" },
          { name: "New Arrivals", link: "" },
          { name: "Bundle Deals", link: "" },
          { name: "Upgrade Packs", link: "" },
          { name: "Accessories", link: "" },
        ],
      },
      {
        heading: "Support",
        items: [
          { name: "Installation Guide", link: "" },
          { name: "Warranty", link: "" },
          { name: "FAQs", link: "" },
        ],
      },
    ],
  },

  {
    name: "Shopping tool",
    columns: [
      {
        heading: "Shopping Tool",
        items: [
          { name: "Battery Calculator", link: "" },
          { name: "Solar Calculator", link: "" },
          { name: "Cable Size Calculator", link: "" },
          { name: "Product Finder", link: "" },
          { name: "Compare Products", link: "" },
        ],
      },
      {
        heading: "Help",
        items: [
          { name: "Buying Guides", link: "" },
          { name: "Product Comparison", link: "" },
          { name: "Compatibility Checker", link: "" },
          { name: "FAQs", link: "" },
          { name: "Contact Support", link: "" },
        ],
      },
      {
        heading: "Resources",
        items: [
          { name: "Installation Videos", link: "" },
          { name: "Downloads", link: "" },
          { name: "Warranty", link: "" },
        ],
      },
    ],
  },
];


export const subMenuData:SubMenuInterface[][] = [electricalSystem, vanConversion, shop];
