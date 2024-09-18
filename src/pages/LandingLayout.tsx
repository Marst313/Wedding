import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import song from '../assets/A Thousand Years.mp3';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from 'react-icons/hi2';

const LandingLayout = () => {
  const [play, setPlay] = useState<boolean>(true);
  const audio = useRef<HTMLAudioElement | null>(null);

  const handleClickMusic = () => {
    if (audio.current) {
      if (play) {
        audio.current.pause();
      } else {
        audio.current.play();
      }
      setPlay(!play);
    }
  };

  useEffect(() => {
    if (audio.current) {
      audio.current.play();
    }
  }, []);

  return (
    <main className="w-full bg-slate-900 md:p-5 h-screen relative">
      <Outlet />
      <Navbar />

      <button onClick={handleClickMusic} className={`text-2xl fixed z-40 bottom-24 right-4 p-2 bg-blue-900 backdrop-blur-sm rounded-full transition-all `}>
        {play ? <HiOutlineSpeakerWave className="text-white" /> : <HiOutlineSpeakerXMark className="text-white" />}
      </button>

      <audio src={song} ref={audio} />
    </main>
  );
};
export default LandingLayout;
