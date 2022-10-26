import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from 'components/theme/Theme';
import s from '../header/header.module.scss';
import headerMenu from './headermenu';
import Container from 'components/container/Container';
import '../../i18next';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.item} ${s.active}` : s.item;
};

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <header className={s.header}>
          <div className={s.wrapper}>
            <nav className={s.nav}>
              <Sidebar />
              {headerMenu.map(({ name, to }) => {
                return (
                  <div key={name}>
                    <NavLink to={to} end className={getActiveClassName}>
                      {t(name)}
                    </NavLink>
                  </div>
                );
              })}
            </nav>
          </div>
        </header>
        {<Outlet />}
      </Container>
    </>
  );
};

export default Header;
