import React, { FormEvent, useState } from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const handleSumbit = (event: FormEvent) => {
    event.preventDefault();
    fetch('https://json-server.machens.dev/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: FirstName,
        lastName: LastName,
      }),
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSumbit}>
      <div className={styles.input__text}>
        <label>
          <p>Vorname</p>
          <input
            className={styles.input__field}
            type="text"
            value={FirstName}
            onChange={(event) => setFirstName(event.target.value)}
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
