import styles from '../styles/Container.module.css';
import { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Todo } from '../types/interfaces';

const filters = ['all', 'active', 'completed'];
export default function Container() {
  const initialTodos = useMemo(
    () => JSON.parse(localStorage.getItem('todos') || '[]'),
    [],
  );

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className={styles.container}>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Main todos={todos} setTodos={setTodos} filter={filter} />
      <Footer setTodos={setTodos} />
    </div>
  );
}
