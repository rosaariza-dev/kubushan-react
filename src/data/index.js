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
