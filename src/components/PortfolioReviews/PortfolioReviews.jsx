import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './PortfolioReviews.module.scss';

const PortfolioReviews = ({ item }) => {
  const location = useLocation();

  return (
    <div className={s.box}>
      <div className={s.box__inner}>
        <div className={s.box__img_thumb}>
          <img src={item.img_bg} alt={item.title} className={s.box__img} />
        </div>
        <div className={s.box__data}>
          <h1 className={s.box__data_title}>{item.title}</h1>
          <div className={s.box__data_skills}>
            {item?.skills?.map(skill => (
              <p key={skill} className={s.box__data_skill}>
                {skill}
              </p>
            ))}
          </div>
          <p className={s.box__data_text}>{item.text}</p>
          <Link to={location.state?.from ?? '/portfolio'} className={s.box__link}> go back</Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioReviews;
