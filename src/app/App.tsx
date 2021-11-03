import React from 'react';
import styles from './App.module.css';
import Title from './Components/Title/Title';
import Form from './Components/Form/Form';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.container__content}>
        <Title />
        <Form />
      </div>
    </main>
  );
}

export default App;
