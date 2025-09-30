import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMenu } from "@/contexts/MenuContext";
import { cn } from "@/lib/utils";

const CarouselMenu = () => {
  const { selectedTypeId, fetchAllProducts, fetchProductsByType , loading, types} = useMenu();

  const handleTypeClick = (typeId) => {
    if (typeId === null) {
      fetchAllProducts();
    } else {
      fetchProductsByType(typeId);
    }
  };

  if (loading && types.length === 0) {
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
          <button
            className={cn(
              "flex flex-row items-center justify-center min-h-[60px]  min-w-[280px]  w-full px-12 py-4  bg-custom-black rounded-[42px] gap-4 cursor-pointer transition-colors",
              selectedTypeId === null
                ? "bg-custom-brown"
                : "bg-custom-black  hover:bg-custom-black-hover"
            )}
            onClick={() => handleTypeClick(null)}
          >
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

        {types.map(({ _id, name, image }) => (
          <CarouselItem
            key={_id}
            className="sm:basis-1/2  lg:basis-1/3 xl:basis-1/4 "
          >
            <button
              className={cn(
                "flex flex-row items-center justify-center min-h-[60px]  min-w-[280px]  w-full px-12 py-4  bg-custom-black rounded-[42px] gap-4 cursor-pointer transition-colors",
                selectedTypeId === _id
                  ? "bg-custom-brown"
                  : "bg-custom-black  hover:bg-custom-black-hover"
              )}
              onClick={() => handleTypeClick(_id)}
            >
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
