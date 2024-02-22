import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Button as AntBtn, Avatar, Popover, List } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Divider from '../Divider/Divider'
import Search from '../Search/Search'
import { logo } from '../../constants/image'

import { generateShortName } from '../../utils'

import { privateRoutes } from '../../routes'

function Navbar() {
  const navigate = useNavigate()

  const userReducer = useSelector((state) => state.userReducer)
  const { employeeInfo, loading } = userReducer

  const [visible, setVisible] = useState(false)
  const handleAvatarClick = () => {
    setVisible(!visible)
  }
  const handleVisibleChange = (visible) => {
    setVisible(visible)
  }

  return (
    <nav className="flex items-center gap-4 py-3">
      <div className="w-11 h-11">
        <img src={logo} alt="unsplash-logo" className="w-full h-full" />
      </div>
      <Search variant="navbar" />
      <div className="hidden md:flex gap-4 items-center">
        <div className="flex items-center">
          <Button variant="clean">Explore</Button>
          <Button variant="clean">Avertise</Button>
          <Button variant="clean">Blog</Button>
        </div>
        <Divider />
        <div className="flex items-center">
          {/* <Button variant="clean">Log in</Button>
          <div className="w-[1px] h-4 bg-neutral-400 rotate-[15deg] mx-1" />
          <Button variant="clean">Sign up</Button> */}
          {/* <Avatar>{info}</Avatar> */}
          {/* <div>{info.user}</div> */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Popover
              content={
                <List itemLayout="vertical" className="bg-white">
                  {privateRoutes.map((route, index) => (
                    <List.Item
                      key={index}
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <AntBtn
                        type="text"
                        onClick={() => {
                          navigate(route.path)
                          console.log(route.name)
                        }}
                        style={{ lineHeight: 'normal' }}
                      >
                        {route.name}
                      </AntBtn>
                    </List.Item>
                  ))}
                </List>
              }
              trigger="click"
              open={visible}
              onOpenChange={handleVisibleChange}
            >
              <Avatar size={'large'} onClick={handleAvatarClick}>
                {generateShortName(
                  employeeInfo?.user?.first_name,
                  employeeInfo?.user?.last_name
                )}
              </Avatar>
            </Popover>
          )}
        </div>
        <Button variant="normal">Submit a photo</Button>
      </div>
      <Bars3Icon className="w-6 h-6 cursor-pointer hover:text-neutral-800" />
    </nav>
  )
}

export default Navbar
