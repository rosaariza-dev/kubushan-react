import { createContext, useContext, useState, useEffect } from "react";
import { getProducts, getProductsByTypeId, getTypes } from "@/services/api";
import { logger } from "@/lib/utils";

const MenuContext = createContext();

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu debe ser usado dentro de MenuProvider");
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const [types, setTypes] = useState([])
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTypeId, setSelectedTypeId] = useState(null);

  // Cargar tipos y productos inicialmente
   // Cargar tipos y productos inicialmente
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        // Cargar tipos y productos en paralelo
        const [typesData, productsData] = await Promise.all([
          getTypes(),
          getProducts()
        ]);
        
        setTypes(typesData);
        setProducts(productsData);
        setSelectedTypeId(null);
      } catch (err) {
        logger.error("[MenuContext/fetchInitialData] Error al cargar datos iniciales: ", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchInitialData();
  }, []);

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
      setSelectedTypeId(null);
    } catch (err) {
      logger.error("[MenuContext/fetchAllProducts] Error al cargar productos: ", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByType = async (typeId) => {
    setLoading(true);
    try {
      const data = await getProductsByTypeId(typeId);
      setProducts(data);
      setSelectedTypeId(typeId);
    } catch (err) {
      logger.error("[MenuContext/fetchProductsByType] Error al cargar productos por tipo: ", err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    types,
    products,
    loading,
    selectedTypeId,
    fetchAllProducts,
    fetchProductsByType,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};