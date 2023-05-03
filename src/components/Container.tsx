import styles from '../styles/Container.module.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Container() {
  const initialTitles = ['6시 기상', '헬스', '강의듣기', '일찍 자기'];
  const [titles, setTitles] = useState<string[]>(initialTitles);
  return (
    <div className={styles.container}>
      <Header />
      <Main titles={titles} setTitles={setTitles} />
      <Footer />
    </div>
  );
}
