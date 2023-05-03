import styles from '../styles/Main.module.css';
import Item from './Item';
import { Todo } from '../types/interfaces';
interface MainProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filter: string;
}

export default function Main({ todos, setTodos, filter }: MainProps) {
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
        {todos.map((todo) => {
          if (filter === 'all') {
            return (
              <Item
                key={todo.id}
                todo={todo}
                onUpdate={handleComplete}
                onDelete={handleDelete}
              />
            );
          } else if (filter === 'active') {
            return (
              !todo.isComplete && (
                <Item
                  key={todo.id}
                  todo={todo}
                  onUpdate={handleComplete}
                  onDelete={handleDelete}
                />
              )
            );
          } else if (filter === 'completed') {
            return (
              todo.isComplete && (
                <Item
                  key={todo.id}
                  todo={todo}
                  onUpdate={handleComplete}
                  onDelete={handleDelete}
                />
              )
            );
          }
        })}
      </ul>
    </div>
  );
}
