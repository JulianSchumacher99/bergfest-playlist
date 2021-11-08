import React, { FormEvent, useState } from 'react';
import styles from './Form.module.css';

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type FormProps = {
  onSelectUserName: (username: string) => void;
};

function Form({ onSelectUserName }: FormProps): JSX.Element {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [users, setUsers] = useState<User[]>([]);

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
  async function handleClick() {
    const response = await fetch('https://json-server.machens.dev/users');
    const newUsers = await response.json();
    setUsers(newUsers);
  }

  const allUsers = users.map((user) => (
    <option key={user.id}>
      {user.firstName} {user.lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSumbit}>
      <select
        className={styles.selectUser}
        onClick={handleClick}
        onChange={(event) => onSelectUserName(event.target.value)}
      >
        <option>Gast auswählen</option>
        {allUsers}
      </select>

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
