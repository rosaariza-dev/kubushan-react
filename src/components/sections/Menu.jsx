import { useMenu } from "@/contexts/MenuContext";
import CardMenu from "../ui/CardMenu";
import CarouselMenu from "../ui/CarouselMenu";

const Menu = () => {
  const { products, loading } = useMenu();
  return (
    <section id="menu">
      <div className="pt-16 pb-10 px-8 md:px-16 text-center">
        <span className="encabezado">menú</span>
        <span className="title">Descubre nuestro menú</span>
        <div className="mt-16">
          <CarouselMenu />
          <div className="flex justify-center">
            {loading ? (
              <div className="w-full flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-brown"></div>
              </div>
            ) : products.length > 0 ? (
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {products.map(({ _id, title, description, image, price }) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
