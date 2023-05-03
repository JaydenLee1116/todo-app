import styles from '../styles/Container.module.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Todo } from '../types/interfaces';
import { v4 as uuidv4 } from 'uuid';

const filters = ['all', 'active', 'completed'];
export default function Container() {
  useEffect(() => localStorage.setItem('todos', JSON.stringify([])), []);
  const initialTodos = [
    { id: uuidv4(), title: '6시 기상', isComplete: false },
    { id: uuidv4(), title: '헬스', isComplete: false },
    { id: uuidv4(), title: '강의듣기', isComplete: false },
    { id: uuidv4(), title: '일찍 자기', isComplete: false },
  ];

  const [todos, setTodos] = useState<Todo[]>(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos') as string)
      : initialTodos,
  );

  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className={styles.container}>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Main todos={todos} setTodos={setTodos} filter={filter} />
      <Footer setTodos={setTodos} />
    </div>
  );
}
