import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/home/Home";
import Profesional from "./pages/profesional/ProfesionalPage.jsx";
import Contact from "./pages/contact/Contact.jsx";
import WelcomePage from "./pages/welcome/WelcomePage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="layout" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="profesional" element={<Profesional />} />
            <Route path="contacto" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
