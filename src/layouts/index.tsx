// Setup layout here
import React from 'react'
import { Navbar, Explorer } from '../components'

interface IProps {
  children: React.ReactNode
}

function Layout ({ children }: IProps): JSX.Element {
  return <div>{children}</div>
}

function Header (): JSX.Element {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="px-4 text-neutral-500">
        <Navbar />
        <Explorer />
      </div>
    </header>
  )
}

function Main ({ children }: IProps): JSX.Element {
  return (
    <main className="mb-20">
      <div className="px-4 space-y-6 overflow-hidden">{children}</div>
    </main>
  )
}

export { Layout, Header, Main }
