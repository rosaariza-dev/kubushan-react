import { createContext, useContext, useState, useEffect } from "react";
import { getProducts, getProductsByTypeId, getTypes } from "@/services/api";
import { logger } from "@/lib/utils";
import { useToastContext } from "./ToastContext";

const MenuContext = createContext();

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu debe ser usado dentro de MenuProvider");
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const [types, setTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const { addToast } = useToastContext();
  const [errorState, setErrorState] = useState({
    type: null, // "initial" | "filter" | null
    error: null,
  });

  // Cargar tipos y productos inicialmente
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      setErrorState({ type: null, error: null });
      try {
        // Cargar tipos y productos en paralelo
        const [typesData, productsData] = await Promise.all([
          getTypes(),
          getProducts(),
        ]);

        setTypes(typesData);
        setProducts(productsData);
        setSelectedTypeId(null);
        setErrorState({ type: null, error: null });
      } catch (err) {
        logger.error(
          "[MenuContext/fetchInitialData] Error al cargar datos iniciales: ",
          err
        );

        setErrorState({ type: "initial", error: err }); // Error inicial
        setTypes([]);
        setProducts([]);

        addToast({
          type: "error",
          title: "Error al cargar el menú",
          message:
            "No se pudó cargar el menú correctamente. Por favor, recarga la página.",
          duration: 6000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const fetchAllProducts = async () => {
    setLoading(true);
    setSelectedTypeId(null);
    setErrorState({ type: null, error: null });
    try {
      const data = await getProducts();
      setProducts(data);
      setErrorState({ type: null, error: null });
    } catch (error) {
      logger.error(
        "[MenuContext/fetchAllProducts] Error al cargar productos:",
        error
      );

      setProducts([]);
      setErrorState({ type: "filter", error: error }); // Error de filtro

      addToast({
        type: "error",
        title: "Error al cargar los productos",
        message:
          "No se pudieron cargar los productos. Por favor, recarga la página.",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByType = async (typeId) => {
    setLoading(true);
    setSelectedTypeId(typeId);
    setErrorState({ type: null, error: null });
    try {
      const data = await getProductsByTypeId(typeId);
      setProducts(data);
      setErrorState({ type: null, error: null });
    } catch (error) {
      logger.error(
        "[MenuContext/fetchProductsByType] Error al cargar productos por tipo: ",
        error,
        { typeId }
      );

      setProducts([]);
      setErrorState({ type: "filter", error: error }); // Error de filtro

      addToast({
        type: "error",
        title: "Error al cargar el tipo",
        message:
          "No se pudieron cargar los productos del tipo seleccionado. Por favor, recarga la página.",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const value = {
    types,
    products,
    loading,
    selectedTypeId,
    errorState,
    fetchAllProducts,
    fetchProductsByType,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
