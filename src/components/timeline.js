import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';

export default function Timeline() {
  const { photos } = usePhotos();

  console.log('photos', photos);
  return (
    <div className="container col-span-2">
      <p>I'm the Timeline</p>
    </div>
  );
}
