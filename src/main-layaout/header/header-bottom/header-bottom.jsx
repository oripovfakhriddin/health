import React from 'react'
import { HeaderBottomBox } from './header-bottom-styled'
import { Container, Stack, Typography } from '@mui/material'
import { BottomMenu } from './components/bottom-menu'
export const HeaderBottom = () => {
  return (
    <HeaderBottomBox>
      <Container>
        <Stack marginLeft={"7px"} >
          <BottomMenu/>
        </Stack>
        <Stack>
          
        </Stack>
      </Container>
    </HeaderBottomBox>
  )
}
