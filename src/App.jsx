import './App.css';
import { categories, features, gallery, products, testimonials } from './data/siteContent';
import { useReveal } from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Features from './components/Features';
import Products from './components/Products';
import Stats from './components/Stats';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { register } = useReveal();

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero register={register} />
        <Categories register={register} items={categories} />
        <Features register={register} items={features} />
        <Products register={register} items={products} />
        <Stats register={register} />
        <About register={register} />
        <Gallery register={register} items={gallery} />
        <Testimonials register={register} items={testimonials} />
        <Contact register={register} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
