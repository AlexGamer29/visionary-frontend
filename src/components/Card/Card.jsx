import { ArrowDownIcon, PlusIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import Action from '../Action/Action'
import Profile from '../Profile/Profile'

function Card({ post, onClick }) {
  const [hovered, setHovered] = useState(false)
  const [style, setStyle] = useState('')

  const handleClick = () => {
    onClick() // Trigger the function passed from Collection
  }

  const hoverHandler = (isHovered) => {
    setHovered(isHovered)
    if (!hovered) {
      setStyle('brightness-50')
    } else {
      setStyle('brightness-100')
    }
  }

  return (
    <div
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      onClick={handleClick}
      className="relative mb-5 w-screen sm:w-auto -ml-4 sm:ml-0"
    >
      {hovered && (
        <div className="absolute w-full h-full z-10 flex flex-col justify-between p-6">
          <div className="flex justify-end gap-4">
            <Action Icon={HeartIcon} />
            <Action Icon={PlusIcon} />
          </div>
          <div className="flex justify-between items-center">
            <Profile post={post} />
            <Action Icon={ArrowDownIcon} Download={post.photo} />
          </div>
        </div>
      )}
      <img className={`w-full ${style}`} src={post.photo} alt="" />
    </div>
  )
}

export default Card
