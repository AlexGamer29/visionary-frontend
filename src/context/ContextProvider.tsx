import React, { createContext, useState, useContext, type ReactNode } from 'react'

interface State {
  chat: boolean
  cart: boolean
  userProfile: boolean
  notifications: boolean
}

interface ContextType {
  initialState: State
  activeMenu: boolean
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
  isClicked: State
  setIsClicked: React.Dispatch<React.SetStateAction<State>>
  handleClick: (clicked: keyof State) => void
  screenSize: any // You should replace 'any' with the correct type
  setScreenSize: React.Dispatch<React.SetStateAction<any>> // You should replace 'any' with the correct type
}

const StateContext = createContext<ContextType | undefined>(undefined)

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false
}

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState<State>(initialState)
  const [screenSize, setScreenSize] = useState<any>(undefined)
  const handleClick = (clicked: keyof State) => {
    setIsClicked({ ...initialState, [clicked]: true })
  }
  return (
    <StateContext.Provider
      value={{
        initialState,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
