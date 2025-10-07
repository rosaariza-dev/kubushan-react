import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { MenuProvider } from "./contexts/MenuContext";
import HistoryPage from "./pages/HistoryPage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import CopyRight from "./components/ui/CopyRight";
import { ToastProvider } from "./contexts/ToastContext";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <MenuProvider>
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <CopyRight />
          </div>
        </MenuProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
