import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Tickets from "@/sections/Tickets";
import Team from "@/sections/Team";
import Sponsors from "@/sections/Sponsors";
import Footer from "@/sections/Footer";

function App() {
  return (
    <div className="bg-deep min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Tickets />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
