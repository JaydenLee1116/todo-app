import styles from '../styles/Main.module.css';
import Item from './Item';

export default function Main({
  titles,
  setTitles,
}: {
  titles: string[];
  setTitles: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  // 이 상태를 더 위로 올려야될듯

  return (
    <div className={styles.main}>
      {titles.map((title, index) => (
        <Item title={title} key={index} />
      ))}
    </div>
  );
}
