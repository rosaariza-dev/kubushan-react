import { navItems, socialNetworks } from "../../data";
import CopyRight from "../ui/CopyRight";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="py-8 px-8 md:flex md:items-center md:justify-between md:px-10">
        <span className="font-primary font-semibold text-start uppercase text-custom-purple text-2xl">
          kubushan
        </span>
        <ul className="flex items-start justify-start flex-col gap-5 my-6 md:flex-row md:items-center md:m-0">
          {navItems.map(({ title, link }) => (
            <li key={title}>
              <a
                href={link}
                className="uppercase text-lg cursor-pointer font-primary text-custom-black"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-start gap-5">
          {socialNetworks.map(({ name, link, img }) => (
            <li
              key={name}
              className="w-12 h-12 bg-custom-black flex items-center justify-center cursor-pointer rounded-[50%] hover:bg-custom-black-hover md:w-10 md:h-10"
            >
              <a
                href={link}
                target="_blank"
                className="flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={name}
                  width={22}
                  height={22}
                  className="object-contain md:w-[18px] md:h-[18px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
