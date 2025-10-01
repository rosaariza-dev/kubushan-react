import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="size-[300px]">
        <img
          src="/assets/images/404.webp"
          alt="404"
          className="w-full h-full object-contain aspect-auto object-center"
        />
      </div>
      <h1 className="font-primary font-bold text-3xl text-custom-black">
        404 Page Not Found
      </h1>
      <span className="font-secondary text-base text-gray-600">
        Ups… no pudimos encontrar la página que estabas buscando. Vuelve al
        inicio para seguir navegando.
      </span>
      <button
        className="button-base rounded-36 bg-custom-black hover:bg-custom-black-hover text-white gap-2 flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <ArrowLeft />
        Volver
      </button>
    </div>
  );
};

export default NotFoundPage;
