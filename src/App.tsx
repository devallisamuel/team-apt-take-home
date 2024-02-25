import React from 'react';
import './App.css';
import Footer from './components/base/Footer';
import NavBar from './components/base/NavBar';
import Contact from 'components/base/Contact';
import LayoutArticle from 'components/base/LayoutArticle';

function App() {
  return (
    <main className="App">
      <section className="px-2">
        <NavBar />
      </section>
      <LayoutArticle/>
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
