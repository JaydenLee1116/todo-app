import styles from '../styles/Item.module.css';
import { MdDeleteOutline } from 'react-icons/md';
import { useState } from 'react';

interface ItemProps {
  title: string;
}

export default function Item({ title }: ItemProps) {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(!isComplete);
  };

  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <div className={styles.item}>
      <input type="checkbox" checked={isComplete} onChange={handleComplete} />
      <span>{title}</span>
      <button onClick={handleDelete}>
        <MdDeleteOutline />
      </button>
    </div>
  );
}
