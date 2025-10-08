import Navbar from "@/components/global/Navbar";
import MenuContent from "@/components/ui/MenuContent";
import { useMenu } from "@/contexts/MenuContext";

const MenuPage = () => {
  const { products, loading } = useMenu();
  return (
    <>
      <Navbar />
      <div className="mt-14">
        <MenuContent showAll={true} showMore={false} />
      </div>
    </>
  );
};

export default MenuPage;
