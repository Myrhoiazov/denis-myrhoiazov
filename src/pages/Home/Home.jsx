import { useTranslation } from 'react-i18next';
import '../../i18next';
import Container from 'components/container/Container';
import s from './Home.module.scss';

import ToggleLang from 'components/toggle-lang/ToggleLang';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={s.info_hero}>
        <div className={s.name}>{t('hero.name')}</div>
        <div className={s.text}>
          {t('hero.text')}
          <span className={s.text_accent}>{t('hero.country')}</span>
        </div>

        <div className={s.btn_group}>
          <ToggleLang />
        </div>
      </div>
      <div className={s.hero}></div>
    </Container>
  );
};

export default Home;
