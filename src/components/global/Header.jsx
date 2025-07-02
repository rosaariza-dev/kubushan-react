import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="font-primary pt-7 pb-3 px-8 md:px-16 max-w-full">
      <nav className="flex items-center justify-between">
        <span className="uppercase font-semibold text-custom-purple text-xl md:text-2xl">
          kubushan
        </span>
        <div role="button" className="flex md:hidden cursor-pointer">
          <Menu color="var(--color-custom-black)" />
        </div>
        <ul className="uppercase font-normal hidden md:flex text-custom-black items-center gap-5 justify-end text-xl ">
          <li>menú</li>
          <li>servicios</li>
          <li>sobre nosotros</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
