import styles from '../styles/Header.module.css';
import { useContext } from 'react';
import { DarkModeContext, useDarkMode } from '../context/DarkModeContext';
import { BsSun, BsMoon } from 'react-icons/bs';
interface HeaderProps {
  filters: string[];
  filter: string;
  onFilterChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({
  filters,
  filter,
  onFilterChange,
}: HeaderProps) {
  const handleFilterChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    onFilterChange(value);
  };

  const { darkMode, toggleDarkMode }: DarkModeContext = useDarkMode();
  return (
    <div className={styles.header}>
      <button onClick={toggleDarkMode}>
        {darkMode ? <BsSun /> : <BsMoon />}
      </button>
      <button onClick={handleFilterChange} value="all">
        All
      </button>
      <button onClick={handleFilterChange} value="active">
        Active
      </button>
      <button onClick={handleFilterChange} value="completed">
        Completed
      </button>
    </div>
  );
}
