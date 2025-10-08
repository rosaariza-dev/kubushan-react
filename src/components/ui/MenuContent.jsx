import { useMenu } from "@/contexts/MenuContext";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import SpinnerBubble from "@/components/ui/SpinnerBubble";
import CardAlert from "@/components/ui/CardAlert";
import CarouselMenu from "./CarouselMenu";
import CardMenu from "./CardMenu";

const MenuContent = ({ showMore = false, showAll = false, limit = 3 }) => {
  const { products, loading, errorState, types } = useMenu();
  const productList = showAll ? products : products?.slice(0, limit);

  if (loading && types.length == 0) {
    return (
      <section id="menu" className="pb-14 pt-10 ">
        <div className="pt-16 pb-10 px-8 md:px-16 text-center">
          <span className="encabezado">menú</span>
          <span className="title">Descubre nuestro menú</span>
          <div className="mt-16 min-h-[350px]">
            <SpinnerBubble description={"Cargando menú..."} />
          </div>
        </div>
      </section>
    );
  }

  if (errorState.type === "initial" && !loading) {
    return (
      <section id="menu" className="pb-14 pt-10">
        <div className="pt-16 pb-10 px-8 md:px-16 text-center flex items-center justify-center flex-col">
          <span className="encabezado">menú</span>
          <span className="title">Descubre nuestro menú</span>

          <CardAlert
            hasButton={true}
            title={"Error al cargar el menú"}
            description={
              " No se pudo cargar el menú. Por favor, recarga la página para intentar nuevamente."
            }
          />
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="pb-14 pt-10">
      <div className="pt-16 pb-10 px-8 md:px-16 text-center">
        <span className="encabezado">menú</span>
        <span className="title">Descubre nuestro menú</span>
        <div className="mt-16">
          <CarouselMenu />
          <div className="flex flex-col justify-center items-center gap-8">
            {loading ? (
              // Loading state
              <div className="w-full flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-brown"></div>
              </div>
            ) : errorState.type === "filter" ? (
              // ✅ Error de filtrado (NO error inicial)
              <CardAlert
                title={" Error al cargar los productos"}
                description={
                  "Por favor, intenta nuevamente o selecciona otra categoría"
                }
              />
            ) : products.length > 0 ? (
              // Success state con productos
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {productList.map(
                  ({ _id, title, description, image, price }) => (
                    <CardMenu
                      key={_id}
                      title={title}
                      description={description}
                      image={image}
                      price={price}
                    />
                  )
                )}
              </div>
            ) : (
              // Empty state - Sin productos pero sin error
              <div className="mt-16 flex w-full items-center justify-center">
                <p className="text-gray-500 py-8 w-full font-secondary text-base">
                  No hay productos disponibles en esta categoría
                </p>
              </div>
            )}

            {showMore && (
              <Link
                to={"/menu"}
                target="_blank"
                className="button-base bg-custom-purple text-white rounded-36 hover:bg-custom-purple flex items-center justify-center font-secondary font-medium shadow-[var(--shadow-principal)] gap-3 md:w-[212px]"
              >
                Más <ExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuContent;
