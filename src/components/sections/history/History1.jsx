import React from "react";

const History1 = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-10 lg:flex-row-reverse lg:gap-15">
      <div className="flex flex-1 items-center justify-center aspect-auto relative max-w-[500px] lg:max-w-full ">
        <img
          src="/assets/images/panda.webp"
          alt="panda"
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className=" flex-1">
        <span className="title">Nuestra historia</span>
        <span className="subtitle mt-3 mb-6 block lg:mt-5 ">
          “En Kubushan brindamos más que café: regalamos momentos.”
        </span>
        <p className="description">
          Kubushan nació de un sueño simple pero profundo: crear un lugar donde
          el café no fuera solo una bebida, sino una experiencia que llenara de
          calidez y alegría cada encuentro. Desde el inicio comprendimos que
          queríamos ir más allá de servir productos de primera calidad;
          deseábamos regalar sonrisas, momentos memorables y un espacio que
          invitara a reconectar con lo verdaderamente importante.
        </p>
      </div>
    </section>
  );
};

export default History1;
