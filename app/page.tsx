import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="main-page">
        <Introduction />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
