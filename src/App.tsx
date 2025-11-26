import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

// Lazy load non-critical components
const Story = lazy(() => import("./components/Story"));
const Location = lazy(() => import("./components/Location"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      
      {/* Lazy loaded components with Suspense */}
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4 my-8"></div>}>
        <Story />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4 my-8"></div>}>
        <Location />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4 my-8"></div>}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
