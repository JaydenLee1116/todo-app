import styles from '../styles/Footer.module.css';
import InputItem from './InputItem';
import { Todo } from '../types/interfaces';

interface FooterProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default function Footer({ setTodos }: FooterProps) {
  return (
    <div className={styles.footer}>
      <InputItem setTodos={setTodos} />
    </div>
  );
}
