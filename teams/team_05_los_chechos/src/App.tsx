import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Simulator from "./pages/Simulator";
import NotFound from "./pages/NotFound";
import Guide1Million from "./pages/guides/Guide1Million";
import GuideDiversify from "./pages/guides/GuideDiversify";
import GuideLargeCapital from "./pages/guides/GuideLargeCapital";
import GuideStartInvesting from "./pages/guides/GuideStartInvesting";
import Guide2025 from "./pages/guides/Guide2025";
import GuideSustainable from "./pages/guides/GuideSustainable";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/guides/1-million-euros" element={<Guide1Million />} />
          <Route path="/guides/diversify-portfolio" element={<GuideDiversify />} />
          <Route path="/guides/large-capital" element={<GuideLargeCapital />} />
          <Route path="/guides/start-investing" element={<GuideStartInvesting />} />
          <Route path="/guides/invest-2025" element={<Guide2025 />} />
          <Route path="/guides/sustainable-investment" element={<GuideSustainable />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
