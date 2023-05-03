import { useState } from 'react';
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
  return (
    <div className={styles.inputItem}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={inputText}
        onChange={handleInput}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
