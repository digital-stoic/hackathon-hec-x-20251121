import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateCompany from "./pages/CreateCompany";
import Dashboard from "./pages/Dashboard";
import PrivateBanking from "./pages/PrivateBanking";
import Strategies from "./pages/Strategies";
import Wealth from "./pages/Wealth";
import HoldingSimulator from "./pages/HoldingSimulator";
import ExitPreparation from "./pages/ExitPreparation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create-company" element={<CreateCompany />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/strategies/holding-simulator" element={<HoldingSimulator />} />
          <Route path="/strategies/exit-preparation" element={<ExitPreparation />} />
          <Route path="/wealth" element={<Wealth />} />
          <Route path="/private-banking" element={<PrivateBanking />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;