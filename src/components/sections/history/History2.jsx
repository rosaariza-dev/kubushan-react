const History2 = () => {
  return (
    <section className="bg-custom-brown text-white flex items-center justify-center flex-col gap-10 min-h-[830px]  lg:pt-12 pb-10  lg:px-16">
      <div className="flex flex-col lg:flex-row gap-10 relative">
        <div className="aspect-auto flex-1 lg:size-[570px] w-full overflow-hidden">
          <img
            src="/assets/images/tomar_cafe.webp"
            alt="hombre tomando café"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center pt-10 lg:pt-0 px-8 md:px-16 lg:px-0">
          <h2 className="font-primary font-bold text-3xl md:text-[45px] mb-8">
            Kubushan, el lugar donde la innovación se pone al servicio de tu
            bienestar
          </h2>
          <p className="font-secondary font-normal text-base leading-7 md:text-xl md:leading-8 text-white">
            Con el tiempo entendimos que la tradición y la innovación podían
            caminar de la mano. Por eso, en Kubushan unimos lo mejor de la
            cultura cafetera colombiana con tecnología de vanguardia, para que
            cada visita sea cómoda, inspiradora y única. Nuestro propósito
            siempre ha sido brindar más que café: ofrecer un refugio moderno y
            acogedor donde trabajar, relajarse o compartir se convierta en un
            verdadero placer.
          </p>
        </div>
      </div>
      <span className="font-secondary font-medium text-xl md:text-[32px] text-center px-8 md:px-16">
        “La innovación nos mantiene actuales, tu experiencia nos hace únicos.”
      </span>
    </section>
  );
};

export default History2;
