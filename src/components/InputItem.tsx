import { useRef, useState } from 'react';
import styles from '../styles/InputItem.module.css';
import { Todo } from '../types/interfaces';

interface InputItemProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default function InputItem({ setTodos }: InputItemProps) {
  const [inputText, setInputText] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleAdd = () => {
    setTodos((prev) => [...prev, { title: inputText, isComplete: false }]);
    setInputText('');
  };
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles['input-item']}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={inputText}
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAdd();
            (inputRef.current as HTMLInputElement).focus();
          }
        }}
        ref={inputRef}
      />
      <button
        onClick={() => {
          handleAdd();
          (inputRef.current as HTMLInputElement).focus();
        }}
      >
        Add
      </button>
    </div>
  );
}
