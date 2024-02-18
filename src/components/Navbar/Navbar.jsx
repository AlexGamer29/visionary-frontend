import React, { useEffect } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Button from '../Button/Button'
import Divider from '../Divider/Divider'
import Search from '../Search/Search'
import { logo } from '../../constants/image'
import Avatar from '@mui/material/Avatar'

import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../../actions/userAction'

function Navbar() {
  const authData = useSelector((state) => state.authReducer.authData)
  const dispatch = useDispatch()

  useEffect(() => {
    if (authData) {
      console.log(authData)
      dispatch(getUserProfile())
    }
  }, [authData])
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
          <Avatar>HE</Avatar>
        </div>
        <Button variant="normal">Submit a photo</Button>
      </div>
      <Bars3Icon className="w-6 h-6 cursor-pointer hover:text-neutral-800" />
    </nav>
  )
}

export default Navbar
