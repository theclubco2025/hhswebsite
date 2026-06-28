import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustSection />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <QuoteForm />
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
