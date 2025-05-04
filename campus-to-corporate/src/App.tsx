import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import CompanyPage from './pages/CompanyPage';
import NotFound from './pages/NotFound';
import CompaniesPage from './pages/CompaniesPage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/company/:id" element={<CompanyPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;