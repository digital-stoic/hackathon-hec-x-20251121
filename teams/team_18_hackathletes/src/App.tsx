import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import AuthPage from "./pages/AuthPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import ProfileResultPage from "./pages/ProfileResultPage";
import BankConnectionPage from "./pages/BankConnectionPage";
import BoardIntroPage from "./pages/BoardIntroPage";
import DashboardPage from "./pages/DashboardPage";
import AskQuestionPage from "./pages/AskQuestionPage";
import BoardResponsePage from "./pages/BoardResponsePage";
import ExportPDFPage from "./pages/ExportPDFPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <NotificationProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/questionnaire" element={<QuestionnairePage />} />
            <Route path="/profile-result" element={<ProfileResultPage />} />
            <Route path="/bank-connection" element={<BankConnectionPage />} />
            <Route path="/board-intro" element={<BoardIntroPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/ask-question" element={<AskQuestionPage />} />
            <Route path="/board-response" element={<BoardResponsePage />} />
            <Route path="/export-pdf" element={<ExportPDFPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </NotificationProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
