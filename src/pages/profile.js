import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doesUsernameExist } from '../services/firebase';

export default function Profile() {
  const { username } = useParams();
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    document.title = `Instagram - Profile`;
  }, []);

  useEffect(() => {
    async function checkUserExists() {
      const doesUserExists = await doesUsernameExist(username);
    }
  }, []);
  return <p>Hello!</p>;
}
