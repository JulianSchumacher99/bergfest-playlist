import React from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  return (
    <form className={styles.form}>
      <div className={styles.input__text}>
        <span>Vorname</span>
        <input
          className={styles.input__field}
          type="text"
          id="FirstName"
          name="Vorname"
        />
      </div>
      <div className={styles.input__text}>
        <span>Nachname</span>
        <input
          className={styles.input__field}
          type="text"
          id="LastName"
          name="Nachname"
        />
      </div>
      <input
        className={styles.button}
        type="submit"
        id="Submit"
        value="Los geht's"
      />
    </form>
  );
}

export default Form;
