import React, { Component } from 'react'
import Flicking, { ViewportSlot } from '@egjs/react-flicking'
import { Arrow } from '@egjs/flicking-plugins'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/react-flicking/dist/flicking-inline.css'
import posts from '../../data/data'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.plugins = [new Arrow()]
  }

  render() {
    return (
      <Flicking circular="true" plugins={this.plugins}>
        {posts.map((post) => (
          <div
            key={post.id}
            className="card-panel"
            style={{
              'min-width': 'min(100%, 426px)',
              'max-width': 'calc(73.3815vh - 128.418px)',
            }}
          >
            <img
              src={post.photo}
              alt=""
              style={{
                height: '100%',
              }}
            />
          </div>
        ))}
        <ViewportSlot>
          <span className="flicking-arrow-prev"></span>
          <span className="flicking-arrow-next"></span>
        </ViewportSlot>
      </Flicking>
    )
  }
}
