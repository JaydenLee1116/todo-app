import styles from '../styles/Item.module.css';
import { MdDeleteOutline } from 'react-icons/md';
import { Todo } from '../types/interfaces';

interface ItemProps {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export default function Item({ todo, onUpdate, onDelete }: ItemProps) {
  const handleComplete = () => {
    onUpdate(todo);
  };
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.item}>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleComplete}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button onClick={handleDelete}>
        <MdDeleteOutline />
      </button>
    </li>
  );
}
