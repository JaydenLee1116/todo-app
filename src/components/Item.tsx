import styles from '../styles/Item.module.css';
import { MdDeleteOutline } from 'react-icons/md';
import { Todo } from '../types/interfaces';

interface ItemProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Item({ todo, setTodos }: ItemProps) {
  const handleComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id === todo.id) {
          return { ...prevTodo, isComplete: !prevTodo.isComplete };
        }
        return prevTodo;
      }),
    );
  };
  // setTodos((prev) =>
  //   prev.map((todo, index) =>
  //     index === id
  //       ? { title: todo.title, isComplete: !todo.isComplete }
  //       : todo,
  //   ),
  // );
  // };

  const handleDelete = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id),
    );
  };

  return (
    <li className={styles.item}>
      <input
        id={`check-${todo.id}`}
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleComplete}
      />
      <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
      <button onClick={handleDelete}>
        <MdDeleteOutline />
      </button>
    </li>
  );
}
