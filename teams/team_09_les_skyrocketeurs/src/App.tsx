import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Map from "./pages/Map";
import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Referral from "./pages/Referral";
import BankingServices from "./pages/BankingServices";
import News from "./pages/News";
import Classement from "./pages/Classement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/map" element={<Map />} />
            <Route path="/quiz/:zoneId" element={<Quiz />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/banking" element={<BankingServices />} />
            <Route path="/news" element={<News />} />
            <Route path="/classement" element={<Classement />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
