import './App.css';
import Container from './components/Container';
import { DarkModeContext, useDarkMode } from './context/DarkModeContext';

export default function App() {
  const { darkMode }: DarkModeContext = useDarkMode();
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Container />
    </div>
  );
}
