import React, { useState } from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  const [FirstName, setFirstName] = useState('');
  console.log(FirstName);
  const [LastName, setLastName] = useState('');
  console.log(LastName);
  const submitFirstName;
  const submitLastName;

  return (
    <form className={styles.form}>
      <div className={styles.input__text}>
        <label>
          <p>Vorname</p>
          <input
            className={styles.input__field}
            type="text"
            value={FirstName}
            onChange={(event) => submitFirstName(event.target.value)}
            onSubmit={(event) => submitLastName(event.preventDefault)}
          />
        </label>
      </div>
      <div className={styles.input__text}>
        <label>
          <p>Nachname</p>
          <input
            className={styles.input__field}
            type="text"
            value={LastName}
            onChange={(event) => setLastName(event.target.value)}
            onSubmit={(event) => submitLastName(event.preventDefault)}
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
