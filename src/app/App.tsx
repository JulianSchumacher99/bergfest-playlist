import React from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.container__content}>
        <h1 className={styles.title}>Bergfest</h1>
        <form className={styles.form}>
          <div className={styles.input__text}>
            <span>Vorname</span>
            <input
              className={styles.input__field}
              type="text"
              id="FirstName"
              name="Vorname"
            ></input>
          </div>
          <div className={styles.input__text}>
            <span>Nachname</span>
            <input
              className={styles.input__field}
              type="text"
              id="LastName"
              name="Nachname"
            ></input>
          </div>
          <input
            className={styles.button}
            type="submit"
            id="Submit"
            value="Los geht's"
          ></input>
        </form>
      </div>
    </main>
  );
}

export default App;
