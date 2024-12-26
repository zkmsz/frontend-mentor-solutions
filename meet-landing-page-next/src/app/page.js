import Logo from "./components/Logo";
import Hero from "./components/Hero";
import Ornament from "./components/Ornament";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <header
        className="flex items-center justify-center mt-12 mb-16 lg:mt-20"
        role="banner"
        aria-label="Meet Site Header"
      >
        <Logo />
      </header>
      <section id="hero" className="mx-8 mb-16" role="region" aria-labelledby="hero-title">
        <Hero />
      </section>
      <div className="my-16" role="region" aria-labelledby="features-title">
        <Ornament>01</Ornament>
      </div>
      <section id="features" className="mx-8 mb-16 md:mx-[2.75rem]">
        <h2 id="features-title" className="sr-only">
          Features Section
        </h2>
        <Features />
      </section>
      <div className="my-16">
        <Ornament>02</Ornament>
      </div>
      <Footer />
    </main>
  );
}
