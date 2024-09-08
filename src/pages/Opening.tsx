import { Carousel } from '../components';
import topLeft from '../assets/images/topLeft.png';
import topRight from '../assets/images/topRight.png';
import { motion } from 'framer-motion';

const Opening = () => {
  return (
    <div className=" ">
      <Carousel />

      <motion.div className="description max-w-sm mx-auto z-20 relative px-5 rounded-tr-2xl h-screen rounded-bl-2xl font-workSans mt-20" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2 }}>
        <h1 className="text-center mb-2 text-2xl capitalize  text-slate-900 font-greatVibes font-light">Sasmita & Romadhoni</h1>

        <h1 className="text-center text-slate-900 my-2  text-xl ">اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ</h1>
        <p className="text-slate-900 text-sm text-center leading-loose mt-1 font-workSans font-normal ">Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara resepsi pernikahan kami pada :</p>
        <h2 className="text-slate-800 text-center leading-relaxed my-2 text-base capitalize font-miama font-extrabold">Resepsi :</h2>
        <p className="text-sm px-10 font-workSans text-slate-800 text-center">
          Hari : <span className="font-bold"> Kamis Pahing</span>
          <br />
          Tanggal : <span className="font-bold">21 November 2024</span>
          <br />
          Jam : <span className="font-bold"> 10.00 WIB </span>
          <br />
          Bertempat di <span className="font-bold">Graha Sasono Mulyo, Wonogiri</span>
        </p>
      </motion.div>

      <motion.img src={topRight} alt="top right" className="absolute top-0 -right-1 z-20 w-48" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="top left" className="absolute top-0 -left-2 z-20 w-48" initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />

      <motion.img src={topRight} alt="bottom left" className="absolute sm:bottom-0 -left-1 z-20 rotate-180 -mt-[29rem] w-48 " initial={{ x: -500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="bottom right" className="absolute  sm:bottom-0 -right-0 z-20 rotate-180  -mt-[29rem] w-48" initial={{ x: 500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
    </div>
  );
};
export default Opening;
