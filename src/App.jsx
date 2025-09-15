import { useLoading } from "./hooks/useLoading";
import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ToolsSection from "./components/ToolsSection";
import WorksSection from "./components/WorksSection";
import Footer from "./components/Footer";

function App() {
  const isLoading = useLoading(1000);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <WorksSection />
      <ToolsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
