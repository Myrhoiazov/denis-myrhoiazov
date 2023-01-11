import React from 'react';
import s from './PortfolioItem.module.scss';

const PortfolioItem = ({ item }) => {
  return (
    <a href={item.link} className={s.link}>
      <div className={s.container}>
        <img
          src={`${item.img_bg}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img_bg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
          className={s.img}
        />
        <h3 className={s.title}>{item.title}</h3>
      </div>
    </a>
  );
};

export default PortfolioItem;
