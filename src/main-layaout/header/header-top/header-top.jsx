import React from 'react'
import { Button, Container,Stack } from '@mui/material';
import { SiteLogo } from '../../../components/site-logo';
import { HeaderTopWrapper } from './header-styled';
import { Navbar } from './components/navbar';
import { SiteNumber } from '../../../components/site-number';
import { Telpath } from './components/telpath';
export const HeaderTop = () => {
  return (
    <Container>
      <HeaderTopWrapper>
          <SiteLogo/>
          <Button variant='contained'>хочу попробовать</Button>
          <Navbar/>
          <Stack>
            <SiteNumber/>
            <Telpath/>
          </Stack>
      </HeaderTopWrapper>
    </Container>
  )
}
