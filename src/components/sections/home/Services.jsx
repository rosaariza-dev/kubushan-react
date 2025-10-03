import CardService from "@/components/ui/CardService";
import { servicesItems } from "@/data";
import clsx from "clsx";

const Services = () => {
  const servicesClasses = clsx(
    // Estilos base/mobile
    "py-20 px-8 flex flex-col items-center bg-[linear-gradient(to_right,var(--color-custom-gray-gradient),white),url('/assets/images/services_bg_small.webp')] bg-blend-multiply bg-cover bg-no-repeat bg-center",
    // Estilos tablet
    "md:bg-[linear-gradient(to_right,var(--color-custom-gray-gradient),white),url('/assets/images/services_bg_medium.webp')]",
    // Estilos desktop
    "lg:bg-[linear-gradient(to_right,var(--color-custom-gray-gradient),white),url('/assets/images/services_bg.webp')]"
  );

  return (
    <section id="services" className={servicesClasses}>
      <span className="encabezado">servicios</span>
      <span className="title text-center">Nuestros servicios</span>
      <br />
      <span className="font-secondary block text-xl py-5 text-custom-black">
        En Kubushan pensamos en todo
      </span>
      <div className="flex flex-col justify-center gap-14 my-10 items-stretch md:flex-row md:flex-wrap md:gap-10">
        {servicesItems.map(({ title, img, description, color }) => (
          <CardService
            key={title}
            title={title}
            description={description}
            img={img}
            color={color}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
