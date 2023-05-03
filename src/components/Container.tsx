import styles from '../styles/Container.module.css';
import Header from './Header';
import Item from './Item';

export default function Container() {
  const tempTitles = ['6시 기상', '헬스', '강의듣기', '일찍 자기'];
  return (
    <div className={styles.container}>
      <Header />
      {tempTitles.map((title, index) => (
        <Item title={title} key={index} />
      ))}
    </div>
  );
}
