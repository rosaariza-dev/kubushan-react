import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-18">
      <div className="bg-custom-purple rounded-3xl m-4 h-full flex items-center justify-center">
        <Link className="size-[45px] cursor-pointer" to={"/"}>
          <img
            src="/kubushan.webp"
            alt="logo"
            className="w-full h-full object-contain object-center aspect-auto"
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
