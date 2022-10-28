import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import '../../i18next';
import Container from 'components/container/Container';
import s from './Home.module.scss';

import ToggleLang from 'components/toggle-lang/ToggleLang';

const Home = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <Container>
      <div className={s.info_hero}>
        <div className={s.hero_title}>
          <p className={s.name_text}>{t('hero.hello')}<span className={s.name_accent}>{t('hero.hello-accent')}</span></p>
          <h1 className={s.name}>{t('hero.name')}</h1>
        </div>

        <p className={s.text}>
          {t('hero.text')}
          <span className={s.text_accent}>{t('hero.country')}</span>
        </p>

        {isDesktop && (
          <div className={s.btn_group}>
            <ToggleLang />
          </div>
        )}
      </div>
      <div className={s.hero}></div>
    </Container>
  );
};

export default Home;
