import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className="flex h-screen justify-center content-center items-center">
      <div className="flex flex-col justify-evenly">
        <p className="text-center font-bold my-4">Loading...</p>
        <Loader type="Oval" color="#962FBF" height={200} width={200}></Loader>
      </div>
    </div>
  );
}
