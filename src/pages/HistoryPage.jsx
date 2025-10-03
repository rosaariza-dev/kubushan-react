import Navbar from "@/components/global/Navbar";
import History1 from "@/components/sections/history/History1";

const HistoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-40 pb-16 px-8 md:px-16 bg-[#EBEBEB]">
        <History1 />
      </div>
    </>
  );
};

export default HistoryPage;
