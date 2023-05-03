import styles from '../styles/Main.module.css';
import Item from './Item';
import { Todo } from '../types/interfaces';
interface MainProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Main({ todos, setTodos }: MainProps) {
  const handleComplete = (todo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id === todo.id) {
          return { ...prevTodo, isComplete: !prevTodo.isComplete };
        }
        return prevTodo;
      }),
    );
  };
  const handleDelete = (todo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id),
    );
  };
  return (
    <div className={styles.main}>
      <ul>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            onUpdate={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
