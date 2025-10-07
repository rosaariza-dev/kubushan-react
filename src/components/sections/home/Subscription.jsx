import Dialog from "@/components/ui/Dialog";
import clsx from "clsx";
import { Send } from "lucide-react";
import { useState } from "react";

const Subscription = () => {
  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    type: "info",
    title: "",
    message: "",
  });

  const showAlert = (type, title, message) => {
    setAlertConfig({
      isOpen: true,
      type,
      title,
      message,
    });
  };

  const closeAlert = () => {
    setAlertConfig({ ...alertConfig, isOpen: false });
  };

  const subscriptionClasses = clsx(
    // Estilos base/mobile
    "bg-custom-purple bg-[url('/assets/images/subscription_bg_small.webp')] bg-center bg-no-repeat bg-contain bg-blend-lighten px-8 py-5 flex flex-col justify-center items-center text-center min-h-[968px]",
    // Estilos tablet
    "md:px-16 md:min-h-[1100px] md:bg-[url('/assets/images/subscription_bg_medium.webp')]",
    // Estilos desktop
    "lg:bg-[url('/assets/images/subscription_bg.webp')] lg:min-h-[1050px]"
  );
  return (
    <section className={subscriptionClasses}>
      <p className="text-5xl leading-16 font-primary font-bold mb-5 text-white md:text-[80px] md:mb-14 md:leading-24">
        Sé el primero en enterarte de nuestras novedades y promociones
        exclusivas
      </p>
      <span className="font-lg font-secondary text-white/80 mb-6 md:text-[28px] md:mb-14">
        Recibe lo mejor de Kubushan directo en tu correo.
      </span>
      <div className="flex items-center flex-col w-full font-secondary gap-6 md:flex-row md:border md:border-white max-w-[700px] md:rounded-[64px] md:p-5">
        <input
          className="p-6 w-full text-center text-base rounded-[44px] border border-white outline-none text-white placeholder:text-base placeholder:text-white/50 placeholder:font-secondary placeholder:text-center md:flex-1 md:border-none md:text-[22px] md:text-start md:placeholder:text-[22px] md:placeholder:text-start"
          type="text"
          placeholder="Ingresa tu correo electrónico"
        />
        <button
          className="flex items-center justify-center bg-custom-black text-white min-w-[230px] p-4 font-secondary font-medium rounded-36 border-none gap-3 cursor-pointer text-base hover:bg-neutral-900 md:p-5 md:text-[22px]"
          onClick={() => showAlert()}
        >
          <Send size={24} />
          Enviar
        </button>
      </div>

      <Dialog
        isOpen={alertConfig.isOpen}
        onClose={closeAlert}
        type={alertConfig.type}
        title={alertConfig.title}
        message={alertConfig.message}
      />
    </section>
  );
};

export default Subscription;
