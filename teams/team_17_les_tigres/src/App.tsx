import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Home";
import Patrimoine from "./pages/Patrimoine";
import PortfolioDetails from "./pages/PortfolioDetails";
import Opportunities from "./pages/Opportunities";
import Documents from "./pages/Documents";
import Conseil from "./pages/Conseil";
import Experts from "./pages/Experts";
import InvestorProfile from "./pages/InvestorProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patrimoine" element={<Patrimoine />} />
            <Route path="/patrimoine/details" element={<PortfolioDetails />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/conseil" element={<Conseil />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/profil-investisseur" element={<InvestorProfile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
