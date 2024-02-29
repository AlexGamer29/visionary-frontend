import React, { useState } from 'react'
import { Modal } from 'antd'
import { createStyles, useTheme } from 'antd-style'
import { Layout, Header, Main } from '../../layouts'
import { Hero, Collection, Carousel } from '../../components'
import posts from '../../data/data'

const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    // background: token.blue1,
    // overflow: 'auto',
    // marginTop: token.marginLG,
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'my-modal-header': {
    // borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    border: '1px solid #333',
    boxShadow: '0 0 30px #999',
    maxHeight:
      'calc(1000vh - 200px)' /* Adjust the max height based on your layout */,
    overflow: 'auto' /* Allow scrolling if content overflows */,
  },
}))

function Home() {
  const [showCarousel, setShowCarousel] = useState(false)
  const { styles } = useStyle()
  const token = useTheme()

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel)
  }

  const handleOk = () => {
    setShowCarousel(false)
  }

  const handleCancel = () => {
    setShowCarousel(false)
  }

  const classNames = {
    body: styles['my-modal-body'],
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    footer: styles['my-modal-footer'],
    content: styles['my-modal-content'],
  }

  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      // boxShadow: 'inset 0 0 5px #999',
      borderRadius: 5,
      margin: '1rem',
    },
    mask: {
      // backdropFilter: 'blur(10px)',
    },
    content: {
      boxShadow: '0 0 30px #999',
    },
  }

  return (
    <Layout>
      <Header />
      <Main>
        <Hero />
        <Collection toggleCarousel={toggleCarousel} />
        <Modal
          style={{
            overflow: 'auto',
            backfaceVisibility: 'hidden',
            cursor: 'zoom-out',
            inset: '0 0 0 0',
            position: 'fixed',
            zIndex: 999,
            scrollbarWidth: 'none',
          }}
          classNames={classNames}
          styles={modalStyles}
          open={showCarousel}
          onOk={handleOk}
          onCancel={handleCancel}
          width={'80%'}
        >
          <Carousel data={posts} />
          {/* <Carousel /> */}
        </Modal>
      </Main>
    </Layout>
  )
}

export default Home
