import React, { useState } from 'react';
import styles from './App.module.css';
import Title from './Components/Title/Title';
import Form from './Components/Form/Form';
import SongForm from './Components/Song-form/song-form';

function App(): JSX.Element {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  let content;

  if (selectedUser) {
    content = <SongForm fullUserName={selectedUser} />;
  } else {
    content = <Form onSelectUserName={setSelectedUser} />;
  }

  return (
    <main className={styles.container}>
      <div className={styles.container__content}>
        <Title text={selectedUser ? `Hi ${selectedUser}` : 'Bergfest'} />
        {content}
      </div>
    </main>
  );
}

export default App;
