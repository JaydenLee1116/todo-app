import styles from '../styles/Item.module.css';
import { MdDeleteOutline } from 'react-icons/md';
import { Todo } from '../types/interfaces';

interface ItemProps {
  id: number;
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Item({ id, todo, setTodos }: ItemProps) {
  const handleComplete = () => {
    setTodos((prev) =>
      prev.map((todo, index) =>
        index === id
          ? { title: todo.title, isComplete: !todo.isComplete }
          : todo,
      ),
    );
  };

  const handleDelete = () => {
    setTodos((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <li className={styles.item}>
      <input
        id={`check-${id}`}
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleComplete}
      />
      <label htmlFor={`check-${id}`}>{todo.title}</label>
      <button onClick={handleDelete}>
        <MdDeleteOutline />
      </button>
    </li>
  );
}
