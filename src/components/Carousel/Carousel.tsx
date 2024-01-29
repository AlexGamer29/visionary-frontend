import React, { Component, type ReactNode } from 'react'
import Flicking, { ViewportSlot } from '@egjs/react-flicking'
import { Arrow } from '@egjs/flicking-plugins'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/react-flicking/dist/flicking-inline.css'
import posts from '../../data/data'

interface Post {
  id: React.Key | null | undefined
  photo: string | undefined
}

export default class Carousel extends Component<any> {
  plugins: Arrow[]

  constructor (props: any) {
    super(props)
    this.plugins = [new Arrow()]
  }

  renderPosts (): ReactNode {
    return posts.map((post: Post) => (
      <div
        key={post.id}
        className="card-panel"
        style={{
          minWidth: 'min(100%, 426px)',
          maxWidth: 'calc(73.3815vh - 128.418px)'
        }}
      >
        <img
          src={post.photo}
          alt=""
          style={{
            height: '100%'
          }}
        />
      </div>
    ))
  }

  render (): ReactNode {
    return (
      <Flicking circular={true} plugins={this.plugins}>
        {this.renderPosts()}
        <ViewportSlot>
          <span className="flicking-arrow-prev"></span>
          <span className="flicking-arrow-next"></span>
        </ViewportSlot>
      </Flicking>
    )
  }
}
