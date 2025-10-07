import { AlertCircle, RefreshCw } from "lucide-react";
import React from "react";

const CardAlert = ({ hasButton = false, title, description }) => {
  return (
    <div className="mt-16 flex flex-col max-w-[600px] px-6  items-center justify-center rounded-2xl gap-6 py-16 bg-zinc-100 border border-red-100 shadow-sm">
      <div className={`text-red-500 bg-red-100 rounded-full p-4 mb-4`}>
        <AlertCircle size={64} />
      </div>
      <p className="text-gray-700 font-primary text-lg  lg:text-2xl font-semibold">
        {title}
      </p>
      <p className="text-gray-500 font-secondary text-base max-w-md">
        {description}
      </p>

      {hasButton && (
        <button
          onClick={() => window.location.reload()}
          className="button-base  text-white rounded-36  flex items-center justify-center font-secondary font-medium bg-custom-black hover:bg-custom-black-hover  gap-3 px-6"
        >
          <RefreshCw size={20} />
          Recargar página
        </button>
      )}
    </div>
  );
};

export default CardAlert;
