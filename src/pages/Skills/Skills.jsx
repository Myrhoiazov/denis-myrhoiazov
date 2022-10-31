import Container from 'components/container';
import s from './Skills.module.scss';
import { skillList } from './skillList';

const Skills = () => {
  return (
    <>
      <Container>
        <div className={s.inner_wrapper}>
          <h2 className={s.title}>Skills</h2>
          <ul className={s.items}>
            {skillList.map(({ skills}) => (
              <li key={skills} className={s.item}>{skills}</li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Skills;
