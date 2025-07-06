import { Armchair, Coffee, EarOff, Wifi } from "lucide-react";
import { images } from "./resources";

export const navItems = [
  {
    title: "menú",
    link: "#menu",
  },
  {
    title: "servicios",
    link: "#services",
  },
  {
    title: "sobre nosotros",
    link: "#about",
  },
];

export const servicesItems = [
  {
    title: "Café de excelencia",
    description:
      "Seleccionamos granos de la más alta calidad para brindarte una taza inolvidable. Aroma, sabor y técnica en cada preparación.",
    img: images.services.service1,
    color: "bg-custom-brown",
  },
  {
    title: "Servicio con alma",
    description:
      "Somos un equipo con corazón y propósito, que brinda calidez y cuidado a través del café. Servimos con pasión y respeto, creando experiencias auténticas en cada taza.",
    img: images.services.service2,
    color: "bg-custom-purple",
  },
  {
    title: "Espacios para conectar",
    description:
      "Ambientes pensados para cada momento: comparte con amigos, conversa con tu familia, relájate o simplemente redescúbrete a ti mismo.",
    img: images.services.service3,
    color: "bg-custom-black",
  },
];

export const coworkingItems = [
  {
    title: "Wifi de alta velocidad",
    description:
      "Navega sin límites con conexión ultrarrápida de hasta 300 Mbps, perfecta para videollamadas, trabajo en la nube y más.",
    icon: Wifi,
  },
  {
    title: "Comodidad personalizada",
    description:
      "Elige entre sillones acogedores o sillas ergonómicas, según tu estilo y necesidad.",
    icon: Armchair,
  },
  {
    title: "Privacidad total",
    description:
      "Cubículos para reuniones con cancelación de ruido externo, garantizando concentración y confidencialidad.",
    icon: EarOff,
  },
  {
    title: "Pedidos sin interrupciones",
    description:
      "Cada mesa está equipada con tablets interactivas, para que disfrutes del mejor café sin perder el ritmo.",
    icon: Coffee,
  },
];
