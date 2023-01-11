import { ImageListItem } from '@mui/material';
import React from 'react';
import s from './PortfolioItem.module.scss';

const PortfolioItem = ({ item }) => {
  return (
    <ImageListItem
      key={item.img_bg}
      sx={{ width: 300, borderRadius: 5, overflow: 'hidden' }}
      className={s.item}
    >
      <img
        src={`${item.img_bg}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img_bg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  );
};

export default PortfolioItem;
