import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);

  const {
    user: { uid: userId = '' },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimeLinePhotos() {
      const followingUserIds = await getUserByUserId(userId);
    }
    console.log(userId);
  }, []);

  return { photos };
}
