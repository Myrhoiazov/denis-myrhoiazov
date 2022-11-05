import Container from 'components/container';
import s from './Contact.module.scss';
import Modal from '../../components/modal';
import { useState } from 'react';

const Contact = () => {
  const [isOpenModal, setIasOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIasOpenModal(!isOpenModal);
  };

  return (
    <>
      <Container>
        <div className={s.inner_wrapper}>
          <div className={s.data}>
            <h1 className={s.title}>Contacts</h1>
            <p className={s.text}>
              Want to know more or just chat? <br /> You are welcome!
            </p>
            <button type="button" className={s.btn} onClick={handleOpenModal}>
              Send message
            </button>
          </div>
        </div>
        {isOpenModal && (
          <Modal onClose={handleOpenModal}>
            <h1>Open Modal</h1>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default Contact;
