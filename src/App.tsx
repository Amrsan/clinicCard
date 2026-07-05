import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // 1. Changed import to HashRouter
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Offers from "./pages/Offers";
import Partners from "./pages/Parteners";
import ProviderDetails from "./pages/ProviderDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* 2. Replaced BrowserRouter with HashRouter */}
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/provider/:id" element={<ProviderDetails />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Partners" element={<Partners />} />

          {/* 3. Moved this to the VERY BOTTOM! */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
