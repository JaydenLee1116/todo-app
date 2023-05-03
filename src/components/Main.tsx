import styles from '../styles/Main.module.css';
import Item from './Item';
import { Todo } from '../types/interfaces';
interface MainProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Main({ todos, setTodos }: MainProps) {
  return (
    <div className={styles.main}>
      <ul>
        {todos.map((todo, index) => (
          <Item key={index} id={index} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}
