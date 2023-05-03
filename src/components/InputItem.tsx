import { useRef, useState } from 'react';
import styles from '../styles/InputItem.module.css';
import { Todo } from '../types/interfaces';
import { v4 as uuidv4 } from 'uuid';

interface InputItemProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default function InputItem({ setTodos }: InputItemProps) {
  const [inputText, setInputText] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputText(value);
  };
  const handleAdd = () => {
    if (!inputText.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), title: inputText, isComplete: false },
    ]);
    setInputText('');
  };
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className={styles['input-item']}
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
        (inputRef.current as HTMLInputElement).focus();
      }}
    >
      <input
        type="text"
        placeholder="Add Todo"
        value={inputText}
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) return;
          if (e.key === 'Enter') {
            handleAdd();
            (inputRef.current as HTMLInputElement).focus();
          }
        }}
        ref={inputRef}
      />
      <button>Add</button>
    </form>
  );
}
