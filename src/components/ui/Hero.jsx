import { images } from "../../data/resources";
import Header from "../global/Header";

const Hero = () => {
  return (
    <div className="bg-linear-225 from-white to-custom-gray">
      <Header />
      <section>
        <div className="px-8 py-3 md:px-16 lg:flex lg:items-center lg:justify-between lg:flex-row-reverse lg:gap-15">
          <div className="flex flex-1 items-center justify-center aspect-[52/78] relative">
            <picture className="w-full h-full md:max-w-[800px]">
              <source
                media="(min-width: 768px)"
                srcSet={images.hero.coffeeDesktop}
              />
              <source
                media="(min-width: 480px)"
                srcSet={images.hero.coffeeMedium}
              />
              <img
                src={images.hero.coffeeSmall}
                width="460"
                height="690"
                alt="café"
                className="w-full h-full object-contain"
              />
            </picture>
          </div>
          <div className="flex-1">
            <span className="title" >Más que café</span>
            <span className="subtitle mt-3 mb-6 block " >
              Espacios con proposito, Tecnología con sentido
            </span>
            <p  className="description">
              Combinamos lo mejor del café y la tecnología con el arte de
              conectar, para que vivas con más presencia, propósito y paz, sorbo
              a sorbo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
