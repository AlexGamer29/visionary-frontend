import React from 'react'
import posts from '../../data/data'
import Card from '../Card/Card'

interface ICollectionProps {
  toggleCarousel: () => void
}

interface IPost {
  id: string
  username: string
  title: string
  photo: string
}

function Collection ({ toggleCarousel }: ICollectionProps): JSX.Element {
  return (
    <section className="grid items-center">
      <div className="mx-auto sm:columns-2 md:columns-3 max-w-7xl">
        {posts.map((post: IPost) => (
          <Card key={post.id} post={post} onClick={toggleCarousel} />
        ))}
      </div>
    </section>
  )
}

export default Collection
