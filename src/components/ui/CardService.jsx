import clsx from "clsx";

const CardService = ({title, color, img, description}) => {
  const cardClasses = clsx(
    // Estilos base/mobile
    "flex flex-col items-center px-8 py-12 rounded-36 text-white shadow-card-service w-full max-w-[400px] object-contain", 
    // Estilos tablet/desktop
    "md:px-16",
    // Estilos variables
    `${color}`
  );
  return (
    <div className={cardClasses} >
      <div className="rounded-[50%] overflow-hidden bg-white flex items-center justify-center w-[200px] h-[200px] md:w-[240px] md:h-[240px]">
        <img
          src={img}
          alt="café"
          width={240}
          height={240}
          className="object-contain w-full h-full"
        />
      </div>
      <span className="font-primary font-semibold text-2xl mt-8 mb-4 text-center md:text-3xl">{title}</span>
      <p className="font-secondary text-base text-left md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default CardService;
