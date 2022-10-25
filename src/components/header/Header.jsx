import { NavLink } from 'react-router-dom';
import Sidebar from 'components/theme/Theme';
import s from '../header/header.module.scss';
import headerMenu from './headermenu';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.item} ${s.active}` : s.item;
};

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <div className={s.wrapper}>
          <nav className={s.nav}>
            <Sidebar />
            {headerMenu.map(({ name, to }) => {
              return (
                <div key={name}>
                  <NavLink  to={to} end className={getActiveClassName}>
                    {name}
                  </NavLink>
                </div>
              );
            })}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
