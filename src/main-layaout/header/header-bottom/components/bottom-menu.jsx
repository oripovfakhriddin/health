import React from 'react'
import { LinkDefault } from '../header-bottom-styled';
import burger from "../../../../assets/burger.svg";
import { Typography } from '@mui/material';
export const BottomMenu = () => {
  return (
    <div>
      <LinkDefault>
        <img src={burger} alt="menu" />
        <Typography>
          каталог товаров
        </Typography>
      </LinkDefault>
    </div>
  )
}
