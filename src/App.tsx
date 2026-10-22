import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

// Lazy load non-critical components
const Menu = lazy(() => import("./components/Menu"));
const Story = lazy(() => import("./components/Story"));
const Location = lazy(() => import("./components/Location"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

const Placeholder = () => <div className="h-96 bg-sand" />;

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />

      {/* Lazy loaded components with Suspense */}
      <Suspense fallback={<Placeholder />}>
        <Menu />
        <Story />
        <Location />
        <FAQ />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
