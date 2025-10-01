import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { MenuProvider } from "./contexts/MenuContext";
import HistoryPage from "./pages/HistoryPage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <MenuProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MenuProvider>
    </BrowserRouter>
  );
}

export default App;
