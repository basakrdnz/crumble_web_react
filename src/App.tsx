import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";

// Lazy load non-critical components
const Kitchen = lazy(() => import("./components/Kitchen"));
const Detox = lazy(() => import("./components/Detox"));
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
      <Marquee />
      <About />

      {/* Lazy loaded components with Suspense */}
      <Suspense fallback={<Placeholder />}>
        <Kitchen />
        <Detox />
        <Story />
        <Location />
        <FAQ />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
