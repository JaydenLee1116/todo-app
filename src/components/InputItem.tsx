import { useRef, useState } from 'react';
import styles from '../styles/InputItem.module.css';

interface InputItemProps {
  setTitles: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function InputItem({ setTitles }: InputItemProps) {
  const [inputText, setInputText] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleAdd = () => {
    setTitles((prev) => [...prev, inputText]);
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
