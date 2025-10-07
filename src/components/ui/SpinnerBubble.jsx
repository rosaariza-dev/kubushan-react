const SpinnerBubble = ({ description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[300px]">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-purple-600/30 animate-ping"></div>
        <div
          className="absolute inset-2 rounded-full border-4 border-purple-600/50 animate-ping"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div className="absolute inset-4 rounded-full border-4 border-purple-600 animate-spin"></div>
      </div>
      <div className="space-y-4">
        <span className="text-sm md:text-lg lg:text-2xl text-gray-800 block text-center font-primary font-medium">
          {description}
        </span>
      </div>
    </div>
  );
};

export default SpinnerBubble;
