const History3 = () => {
  return (
    <section className=" bg-custom-purple flex flex-col lg:flex-row-reverse text-white">
      <div className="aspect-auto flex-1 h-[420px] lg:h-[750px]">
        <img
          src="/assets/images/taza_corazon.webp"
          alt="taza"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-8 flex-1 pt-20 pb-16 px-8 md:px-16 justify-center min-h-[550px]">
        <span className="font-primary font-bold text-[43px] leading-14 md:text-6xl md:leading-16 lg:text-[68px] lg:leading-18">
          Aquí, cada taza guarda un pedacito de corazón
        </span>
        <p className="font-secondary font-normal text-base leading-7 md:text-xl md:leading-8">
          Hoy, Kubushan es la suma de pequeños detalles pensados para ti 💜: un
          ambiente que abraza, un café 100% colombiano que inspira y la certeza
          de que cada taza y cada espacio fueron creados con el corazón.
        </p>
      </div>
    </section>
  );
};

export default History3;
