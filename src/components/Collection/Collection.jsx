import React from 'react'
import posts from '../../data/data'
import Card from '../Card/Card'

function Collection({ toggleCarousel }) {
  return (
    <section className="grid items-center">
      <div className="mx-auto sm:columns-2 md:columns-3 max-w-7xl">
        {posts.map((post) => (
          <Card key={post.id} post={post} onClick={toggleCarousel} />
        ))}
      </div>
    </section>
  )
}

export default Collection
