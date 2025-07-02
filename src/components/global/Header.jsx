import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from 'clsx';
import { navItems } from "../../data";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
      setIsOpen(!isOpen);
    }
    const closeMenu = () =>{
      setIsOpen(false);
    }

    const menuClasses = clsx(
      // Estilos base/mobile
      'uppercase p-4 text-xl font-normal text-custom-black flex flex-col gap-3 w-full fixed top-0 h-screen max-w-xs z-12 border-l-gray-300 bg-white',
      // Estilos desktop
      'md:gap-5 md:items-center md:justify-end  md:right-auto md:top-auto md:h-auto md:static md:bg-transparent md:border-l-none md:flex-row md:p-0 md:max-w-full',
      // Estilos condicionales
      isOpen ? 'right-0' : '-right-full'
    )

    const headerOverlayClasses = clsx(
      // Estilos base/mobile
      'fixed inset-0 z-10 bg-black/60',
      // Estilos condicionales
      isOpen ? 'block' : 'hidden'
    )

    
  return (
    <header className="font-primary pt-7 pb-3 px-8 max-w-full md:px-16">
      <nav className="flex items-center justify-between">
        <span className="uppercase font-semibold text-custom-purple text-xl md:text-2xl">
          kubushan
        </span>
        <button className="flex cursor-pointer border-none bg-transparent md:hidden" aria-label="abrir menú" aria-expanded={isOpen} aria-controls="menu-mobile" onClick={toggleMenu}>
          <Menu color="var(--color-custom-black)" />
        </button>
        <ul className={menuClasses}>
          <li className="p-3 md:hidden"><button id="close-button" aria-label="cerrar menú" className="text-white bg-custom-black border-none p-1 w-7 h-7 rounded-lg cursor-pointer flex items-center justify-center " onClick={closeMenu}><X /></button></li>
          {navItems.map(({title, link}) => (
            <li key={title}><a href={link} className="flex p-3 w-full rounded-lg hover:bg-gray-100 md:rounded-full md:px-4 md:py-2" onClick={closeMenu}>{title}</a></li>
          ))}
        </ul>
    
        <div aria-hidden="true" className={headerOverlayClasses} onClick={closeMenu}></div>
      </nav>
    </header>
  );
};

export default Header;