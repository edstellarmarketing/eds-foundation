import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import OurWork from "@/components/sections/OurWork";
import Pillars from "@/components/sections/Pillars";
import Courses from "@/components/sections/Courses";
import Partner from "@/components/sections/Partner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OurWork />
        <Pillars />
        <Courses />
        <Partner />
      </main>
      <Footer />
    </>
  );
}
