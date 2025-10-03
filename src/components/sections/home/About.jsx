import { images } from "@/data/resources";
import clsx from "clsx";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const aboutImageClasses = clsx(
    // Estilos base/mobile
    'overflow-hidden relative w-full min-h-[618px] bg-[url("/assets/images/about_bg_small.avif")] bg-cover bg-center bg-no-repeat',
    // Estilos tablet
    'md:bg-[url("/assets/images/about_bg_medium.avif")] md:flex-1',
    // Estilos desktop
    'lg:bg-[url("/assets/images/about_bg.avif")]'
  );

  return (
    <section id="about" className="flex flex-col lg:flex-row">
      <div className={aboutImageClasses}>
        <picture className="aspect-[346/524] flex justify-center items-end absolute bottom-0 w-full h-full">
          <source
            media="(min-width: 1024px)"
            srcSet={images.about.womanDesktop}
          />
          <source
            media="(min-width: 768px)"
            srcSet={images.about.womanMedium}
          />
          <img
            src={images.about.womanSmall}
            width="349"
            height="524"
            alt="mujer"
            className="object-contain"
          />
        </picture>
      </div>
      <div className="pt-16 pb-10 px-8 md:px-16 md:flex-1">
        <span className="encabezado">sobre nosotros</span>
        <span className="title">
          Creamos nuevas formas de disfrutar el café
        </span>
        <p className="description my-6">
          En Kubushan unimos tradición y tecnología para ofrecer café y espacios
          que inspiran. Creamos ambientes hermosos, acogedores y altamente
          funcionales donde las personas pueden trabajar, relajarse y reconectar
          con lo que realmente importa.
        </p>
        <button
          className="button-base bg-custom-black text-white rounded-36 hover:bg-custom-black-hover flex items-center justify-center gap-3"
          onClick={() => navigate("/history")}
        >
          Conoce más <ExternalLink size={20} />
        </button>
      </div>
    </section>
  );
};

export default About;
