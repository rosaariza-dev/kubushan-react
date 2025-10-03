import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-[68px] bg-custom-black m-5 rounded-3xl top-0 right-0 left-0 fixed z-10 flex justify-center items-center">
      <div className="size-[90px] bg-white rounded-full absolute z-20 -top-3 shadow-[0px_3px_3px_4px_rgba(127,17,224,0.25)] flex items-center justify-center">
        <Link to={"/"}>
          <img
            src="/logo.webp"
            alt="logo"
            className="w-[50px] h-[50px] aspect-auto object-contain object-center"
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
