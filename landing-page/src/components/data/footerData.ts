export interface footerDataInterface {
  heading: string;
  items: Array<string>;
}

const footerData: footerDataInterface[] = [
  {
    heading: "Electrical system",
    items: [
      "Electrical system guide",
      "Electrical design service",
      "Campervan electric kits",
      "Articles",
    ],
  },
  {
    heading: "Shop",
    items: [
      "Book",
      "Batteries",
      "Solar",
      "Charge & convert",
      "Appliances",
      "Powerbanks",
      "Accessories",
      "Kits",
    ],
  },
  {
    heading: "Van conversion",
    items: [
      "The Van Conversion Bible",
      "Van conversion guide",
      "Articles",
      "Van life & travel",
      "Layout configurator",
      "Shopping list tool",
    ],
  },
  {
    heading: "About us",
    items: [
      "Sustainability",
      "Jobs",
      "Become an affiliate",
      "Press & brands",
      "News",
      "Get in touch",
      "Sitemap",
    ],
  },
];

export default footerData;
