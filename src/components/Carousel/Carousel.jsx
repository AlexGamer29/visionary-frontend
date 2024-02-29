import React, { Component } from 'react'
import Flicking, { ViewportSlot } from '@egjs/react-flicking'
import { Arrow } from '@egjs/flicking-plugins'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/react-flicking/dist/flicking-inline.css'
import './Carousel.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import posts from '../../data/data'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.plugins = [new Arrow()]
    this.state = {
      currentIndex: 0,
    }
  }

  renderPosts = () => {
    return posts.map((post) => (
      <div>
        <div
          key={post.id}
          className="card-panel"
          style={{
            height: '95%',
          }}
        >
          <Zoom classDialog="custom-zoom">
            <img src={post.photo} alt={post.title} loading="lazy" />
          </Zoom>
        </div>
        <div
          id="hehe"
          key={post.photo}
          style={{
            height: '5%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {post.title}
        </div>
      </div>
    ))
  }

  handleChange = (e) => {
    this.setState({ currentIndex: e.index })
  }

  render() {
    return (
      <Flicking
        onChanged={(e) => console.log(e.index)}
        circular={true}
        plugins={this.plugins}
      >
        {this.renderPosts()}
        <ViewportSlot>
          <span
            className="flicking-arrow-prev is-thin"
            style={{
              position: 'fixed',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
            }}
          ></span>
          <span
            className="flicking-arrow-next is-thin"
            style={{
              position: 'fixed',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
            }}
          ></span>
        </ViewportSlot>
      </Flicking>
    )
  }
}
