import React, { useState } from 'react'
import { Layout, Header, Main } from '../../layouts'
import { Hero, Collection, Carousel } from '../../components'

function Home (): JSX.Element {
  const [showCarousel, setShowCarousel] = useState<boolean>(false)

  const toggleCarousel = (): void => {
    setShowCarousel(!showCarousel)
  }

  return (
    <Layout>
      <Header />
      <Main>
        <Hero />
        <Collection toggleCarousel={toggleCarousel} />
        {showCarousel && <Carousel />}
      </Main>
    </Layout>
  )
}

export default Home
