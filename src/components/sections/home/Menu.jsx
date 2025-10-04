import { useMenu } from "@/contexts/MenuContext";
import CardMenu from "../../ui/CardMenu";
import CarouselMenu from "../../ui/CarouselMenu";
import { ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { products, loading } = useMenu();
  const navigate = useNavigate();
  return (
    <section id="menu" className="pb-14 pt-10 ">
      <div className="pt-16 pb-10 px-8 md:px-16 text-center">
        <span className="encabezado">menú</span>
        <span className="title">Descubre nuestro menú</span>
        <div className="mt-16">
          <CarouselMenu />
          <div className="flex flex-col justify-center items-center gap-8">
            {loading ? (
              <div className="w-full flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-brown"></div>
              </div>
            ) : products.length > 0 ? (
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {products
                  .slice(0, 3)
                  .map(({ _id, title, description, image, price }) => (
                    <CardMenu
                      key={_id}
                      title={title}
                      description={description}
                      image={image}
                      price={price}
                    />
                  ))}
              </div>
            ) : (
              <div className="mt-16 flex w-full items-center justify-center">
                <p className="text-gray-500 py-8 w-full font-secondary text-base">
                  No hay productos disponibles
                </p>
              </div>
            )}

            <Link
              to={"/menu"}
              target="_blank"
              className="button-base bg-custom-purple text-white rounded-36 hover:bg-custom-purple flex items-center justify-center font-secondary font-medium shadow-[var(--shadow-principal)] gap-3 md:w-[212px]"
            >
              Más <ExternalLink size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
