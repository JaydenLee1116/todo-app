import styles from '../styles/Container.module.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Todo } from '../types/interfaces';

export default function Container() {
  const initialTodos = [
    { title: '6시 기상', isComplete: false },
    { title: '헬스', isComplete: false },
    { title: '강의듣기', isComplete: false },
    { title: '일찍 자기', isComplete: false },
  ];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  return (
    <div className={styles.container}>
      <Header />
      <Main todos={todos} setTodos={setTodos} />
      <Footer setTodos={setTodos} />
    </div>
  );
}
