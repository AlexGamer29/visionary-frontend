import React, { useState } from 'react';
import './App.css';
import { Layout, Header, Main } from './layouts';
import { Hero, Collection, Carousel } from './components';

function App() {
  const [showCarousel, setShowCarousel] = useState(false);

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <Layout>
      <Header />
      <Main>
        <Hero />
        <Collection toggleCarousel={toggleCarousel} />
        {showCarousel && <Carousel />}
      </Main>
    </Layout>
  );
}

export default App;
