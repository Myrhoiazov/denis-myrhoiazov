import { useTranslation } from 'react-i18next';
import '../../i18next';
import Container from 'components/container/Container';
import s from './Home.module.scss';
import { useState } from 'react';

const Home = () => {
  const [lang, setLang] = useState('ua')
  const { t, i18n } = useTranslation();


  const changeLanguage = lang => {
    setLang(lang)
    i18n.changeLanguage(lang);
  };

  const activeLang = (name = 'ua') =>{
    return lang === name ? `${s.btn_lang} ${s.active}` : s.btn_lang
  }

  return (
    <Container>
      <div className={s.info_hero}>
        <div className={s.name}>{t('hero.name')}</div>
        <div className={s.text}>
        {t('hero.text')}<span className={s.text_accent}>{t('hero.country')}</span>
        </div>
        <div className={s.btn_group}>
          <button
            className={activeLang('ua')}
            type="button"
            onClick={() => changeLanguage('ua')}
          >
            Ua
          </button>
          <button
            className={activeLang('en')}
            type="button"
            onClick={() => changeLanguage('en')}
          >
            En
          </button>
          <button
            className={activeLang('ru')}
            type="button"
            onClick={() => changeLanguage('ru')}
          >
            Ru
          </button>
        </div>
      </div>
      <div className={s.hero}>
      </div>
    </Container>
  );
};

export default Home;
