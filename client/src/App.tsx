import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import CityManager from "./pages/CityManager";
import PocLlmCarto from "./pages/PocLlmCarto";
import ElmCodata from "./pages/ElmCodata";
import Proveil from "./pages/Proveil";
import ProjectPage from "./pages/ProjectPage";
import Contact from './pages/Contact';
import DesignSystem from './pages/DesignSystem';
import SideNav from './components/SideNav';
import MobileNav from './components/MobileNav';
import ScrollToTop from './components/ScrollToTop';

// Base path du site sur GitHub Pages : https://hhelemouth.github.io/hh-design-portfolio/
const BASE_PATH = '/hh-portfolio';

function Router() {
  const [location] = useLocation();

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>
      <ScrollToTop />
      {/* Navigation latérale fixe — desktop */}
      <div className="hidden md:block">
        <SideNav />
      </div>

      {/* Navigation mobile */}
      <MobileNav />

      {/* Contenu principal décalé à droite sur desktop */}
      <main className="flex-1 w-full min-w-0 md:ml-52 pt-14 md:pt-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >
            <Switch location={location}>
              <Route path="/" component={Home} />
              <Route path="/projets" component={Projets} />
              <Route path="/projet/city-manager" component={CityManager} />
              <Route path="/projet/design-system" component={DesignSystem} />
              <Route path="/projet/proveil" component={Proveil} />
              <Route path="/projet/poc-llm-carto" component={PocLlmCarto} />
              <Route path="/projet/elm-codata" component={ElmCodata} />
              <Route path="/projet/:slug" component={ProjectPage} />
              <Route path="/contact" component={Contact} />
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <WouterRouter base={BASE_PATH}>
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
