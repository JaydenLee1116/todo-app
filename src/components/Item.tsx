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
    <div className={styles.item}>
      <input type="checkbox" checked={isComplete} onChange={handleComplete} />
      <label htmlFor="">{title}</label>
      <button onClick={handleDelete}>
        <MdDeleteOutline />
      </button>
    </div>
  );
}
