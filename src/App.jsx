import { useEffect, useState } from 'react';
import './App.css';
import { categories, features, gallery, products, testimonials } from './data/siteContent';
import { useReveal } from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Features from './components/Features';
import Products from './components/Products';
import FoodCards from './components/description';
import Stats from './components/Stats';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { register } = useReveal();
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return window.localStorage.getItem('naturalminds-theme') || 'light';
  });

  useEffect(() => {
    window.localStorage.setItem('naturalminds-theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-shell" data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero register={register} />
        <Categories register={register} items={categories} />
        <Features register={register} items={features} />
        <Products register={register} items={products} />
        <FoodCards />
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
