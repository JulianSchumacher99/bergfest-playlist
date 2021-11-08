import React, { FormEvent, useState } from 'react';
import styles from './song-form.module.css';

type SongsFormProps = {
  fullUserName: string;
};

function SongForm({ fullUserName }: SongsFormProps): JSX.Element {
  const [SongName, setSongName] = useState('');
  const [ArtistName, setArtistName] = useState('');

  const handleSumbit = (event: FormEvent) => {
    event.preventDefault();
    fetch('https://json-server.machens.dev/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullUserName: fullUserName,
        artist: ArtistName,
        title: SongName,
      }),
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSumbit}>
      <div className={styles.input__text}>
        <label>
          <p>What's your favorite Song?</p>
          <input
            className={styles.input__field}
            type="text"
            value={SongName}
            onChange={(event) => setSongName(event.target.value)}
          />
        </label>
      </div>
      <div className={styles.input__text}>
        <label>
          <p>Who ist the Artist of this song?</p>
          <input
            className={styles.input__field}
            type="text"
            value={ArtistName}
            onChange={(event) => setArtistName(event.target.value)}
          />
        </label>
      </div>
      <input
        className={styles.submit}
        type="submit"
        id="Submit"
        value="Absenden"
      />
    </form>
  );
}

export default SongForm;
