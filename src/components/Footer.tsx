import styles from '../styles/Footer.module.css';
import InputItem from './InputItem';

interface FooterProps {
  setTitles: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function Footer({ setTitles }: FooterProps) {
  return (
    <div className={styles.footer}>
      <InputItem setTitles={setTitles} />
    </div>
  );
}
