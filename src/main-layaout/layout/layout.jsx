import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
export const Layout = ({children}) => {
  return (
    <>
      <header><Header/></header>
      <main>{children}</main>
      <footer><Footer/></footer>
    </>
  )
}
