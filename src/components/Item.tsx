import styles from '../styles/Item.module.css';
import { MdDeleteOutline } from 'react-icons/md';
import { useState } from 'react';

interface ItemProps {
  id: number;
  title: string;
  setTitles: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Item({ id, title, setTitles }: ItemProps) {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(!isComplete);
  };

  const handleDelete = () => {
    setTitles((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <li className={styles.item}>
      <input
        id={`check-${id}`}
        type="checkbox"
        checked={isComplete}
        onChange={handleComplete}
      />
      <label htmlFor={`check-${id}`}>{title}</label>
      <button onClick={handleDelete}>
        <MdDeleteOutline />
      </button>
    </li>
  );
}
