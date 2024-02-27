import React from 'react';
import './App.css';
import Footer from './components/base/Footer';
import NavBar from './components/base/NavBar';
import Contact from 'components/base/Contact';
import LayoutArticle from 'components/base/LayoutArticle';
import Banner from 'components/base/Banner';
import Hero from 'components/base/Hero';
import MidSection from 'components/base/MidSection';

function App() {
  return (
    <main className="App">
      <section className="px-2">
        <NavBar />
      </section>
      <Banner />
      <Hero />
      <MidSection/>
      <LayoutArticle />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
