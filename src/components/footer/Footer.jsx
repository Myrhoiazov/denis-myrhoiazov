import Container from 'components/container';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.container}>
      <Container>
        <div className={s.content}>
          <p className={s.text}> Content</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
