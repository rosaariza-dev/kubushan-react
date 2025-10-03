import { images, icons } from "../../../data/resources";
import Header from "../../global/Header";
import Testimonial from "../../ui/Testimonial";

const Hero = () => {
  return (
    <div className="bg-linear-225 from-white to-custom-gray-gradient">
      <Header />
      <section className="md:pt-6 md:pb-8">
        <div className="px-8 py-3 md:px-16 lg:flex lg:items-center lg:justify-between lg:flex-row-reverse lg:gap-15">
          <div className="flex flex-1 items-center justify-center aspect-[52/78] relative">
            <picture className="w-full h-full">
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
            <span className="title">Más que café</span>
            <span className="subtitle mt-3 mb-6 block lg:mt-5 ">
              Espacios con proposito, Tecnología con sentido
            </span>
            <p className="description">
              Combinamos lo mejor del café y la tecnología con el arte de
              conectar, para que vivas con más presencia, propósito y paz, sorbo
              a sorbo.
            </p>
            <div className="flex items-start justify-start flex-col md:flex-row gap-10 mt-6 mb-10">
              <button className="button-base rounded-tr-36 rounded-b-36 bg-custom-purple text-white text-base shadow-[var(--shadow-principal)] hover:bg-custom-purple-hover">
                <a href="#menu">Explorar</a>
              </button>
              <button className="button-base text-base rounded-36  flex items-center justify-center hover:bg-custom-gray/80">
                <a
                  href="#about"
                  className="flex items-center justify-center gap-2"
                >
                  <img
                    src={icons.hero.play}
                    alt="play"
                    width={40}
                    height={40}
                  />
                  Nuestra historia
                </a>
              </button>
            </div>
          </div>
        </div>

        <Testimonial />
      </section>
    </div>
  );
};

export default Hero;
