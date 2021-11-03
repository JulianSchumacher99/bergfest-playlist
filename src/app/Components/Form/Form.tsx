import React from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  return (
    <form className={styles.form}>
      <div className={styles.input__text}>
        <label>
          <p>Vorname</p>
          <input
            className={styles.input__field}
            type="text"
            id="FirstName"
            name="Vorname"
          />
        </label>
      </div>
      <div className={styles.input__text}>
        <label>
          <p>Nachname</p>
          <input
            className={styles.input__field}
            type="text"
            id="LastName"
            name="Nachname"
          />
        </label>
      </div>
      <input
        className={styles.submit}
        type="submit"
        id="Submit"
        value="Los geht's"
      />
    </form>
  );
}

export default Form;
