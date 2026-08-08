import footerData from "../data/footerData";
import { Logo } from "../common/Logo";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import Ratings from "../common/Ratings";
function Footer() {
  return (
    <footer className="flex w-screen  flex-col items-center bg-gray-100 lg:h-130">
      <div className="flex h-24 w-[75%] items-center justify-between pb-10 pt-10">
        {/* logo */}
        <div className="flex h-full items-center gap-1">
          <img src={Logo} alt="404" className="box-content w-8" />
          <p className="text-4xl font-semibold">
            nohma<span className="text-sm font-light">.com</span>
          </p>
        </div>
        <div className="mt-2 flex h-8 items-center gap-4">
          <FaInstagram className="cursor-pointer text-gray-400" size={30} />
          <FaFacebookF className="cursor-pointer text-gray-400" size={30} />
          <FaPinterestP className="cursor-pointer text-gray-400" size={30} />
        </div>
      </div>
      <div className="flex flex-wrap h-full justify-center md:gap-20">
        {footerData.map((columns, index) => (
          <div key={columns.heading} className="">
            <h4 className="text-md mb-4 font-bold">{columns.heading}</h4>
            <ul>
              {columns.items.map((item) => (
                <li className="mb-2 mr-4 md:mr-0 text-sm font-light" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex h-42 w-[60%] items-start flex-wrap justify-around">
        <div className="flex flex-col">
          <Ratings rating={4.5} />
          <p className="text-xs font-light">4.8/5 (1419 reviews)</p>
        </div>
        <div className="flex flex-col items-center gap-2 object-cover text-xs font-light">
          <p className="flex gap-5">
            <span>Privacy Policy</span> | <span>Terms & conditions</span> |{" "}
            <span>Terms & conditions</span>
          </p>
          <p className="text-xs text-gray-400">© All rights reserved - Nohma Ltd 2026 </p>
        </div>
        <div>
          <img
            src="https://nohma.com/dist/images/1percent.da3d99.webp"
            alt="404"
            className="h-10"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
