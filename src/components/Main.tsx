import styles from '../styles/Main.module.css';
import Item from './Item';

interface MainProps {
  titles: string[];
  setTitles: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Main({ titles, setTitles }: MainProps) {
  return (
    <div className={styles.main}>
      <ul>
        {titles.map((title, index) => (
          <Item key={index} id={index} title={title} setTitles={setTitles} />
        ))}
      </ul>
    </div>
  );
}
