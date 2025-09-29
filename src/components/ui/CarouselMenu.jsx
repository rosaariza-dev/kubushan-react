import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { logger } from "@/lib/utils";
import { getTypes } from "@/services/api";
import { useEffect, useState } from "react";

const CarouselMenu = () => {
  const [items, setItems] = useState([]);
  const [loading , setLoading ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const types = await getTypes();
        setItems(types);
      } catch (err) {
        logger.error("[CarouselMenu/fetchData] Ocurrió un error al consultar los tipos de productos: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-brown"></div>
      </div>
    );
  }
  
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem
          key={0}
          className="sm:basis-1/2  lg:basis-1/3 xl:basis-1/4"
        >
          <button className="flex flex-row items-center justify-center min-h-[60px]  min-w-[280px]  w-full px-12 py-4  bg-custom-black rounded-[42px] gap-4 cursor-pointer">
            <div className="size-[60px]">
              <img
                src="/assets/images/todos.webp"
                alt="todos"
                className="w-full h-full object-contain aspect-auto object-center"
              />
            </div>
            <span className="text-white capitalize font-secondary text-lg">
              todos
            </span>
          </button>
        </CarouselItem>

        {items.map(({ _id, name, image }) => (
          <CarouselItem
            key={_id}
            className="sm:basis-1/2  lg:basis-1/3 xl:basis-1/4 "
          >
            <button className="flex flex-row items-center justify-center min-h-[60px] min-w-[280px] w-full px-12 py-4  bg-custom-black rounded-[42px] gap-4 cursor-pointer">
              {image && (
                <div className="size-[60px]">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain aspect-auto object-center"
                  />
                </div>
              )}
              <span className="text-white capitalize font-secondary text-lg">
                {name}
              </span>
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default CarouselMenu;
