import React from 'react'
import { navBarData } from '../data/navdata'
import { NavBar, NavBarLink } from '../header-styled';

export const Navbar = () => {
  return (
    <>
      <NavBar>
        {navBarData.map((item)=><React.Fragment key={item.title}>
        <NavBarLink to={item.path}>{item.title}</NavBarLink>
        <span />
        </React.Fragment>)}
      </NavBar>
    </>
  )
}
