import { Link, useParams } from 'react-router-dom';
import bgImage from '../assets/images/1.jpeg';
import { FcFolder } from 'react-icons/fc';
import { motion } from 'framer-motion';
import topLeft from '../assets/images/topLeft.png';
import topRight from '../assets/images/topRight.png';

const Homepage = () => {
  const params = useParams();

  return (
    <main className="container-landing">
      <img src={bgImage} alt="bg images" className="w-full  blur-sm h-full object-top object-cover bg-top absolute z-0" />

      <motion.div className=" w-full  bg-primary/70  z-20 flex items-center py-5 justify-center flex-col h-screen " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <div className="flex flex-col items-center font-workSans  h-full mt-32">
          <h1 className="text-xl text-center  text-shadow leading-relaxed font-bold text-slate-800 text-shadow-white">
            Kamis <br />
            21 November 2024
          </h1>

          <h3 className="main-title">
            Febry romadhoni
            <span>&</span>
            <span>Nurul sasmitaningrum</span>
          </h3>

          <p className="text-xl mt-5 text-slate-800">Yth :</p>
          <p className="text-base">
            Bpk/Ibu Saudara/i : <span className="font-semibold   text-xl text-slate-800 capitalize "> {params.name} </span>
          </p>

          <Link className="btn" to="/landingpage">
            <FcFolder className="text-3xl" />

            <span className="font-semibold">Buka Undangan</span>
          </Link>
        </div>
      </motion.div>

      <motion.img src={topRight} alt="top right" className="absolute top-0 -right-1 z-20 w-48" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="top left" className="absolute top-0 -left-2 z-20 w-48" initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />

      <motion.img src={topRight} alt="bottom left" className="absolute bottom-0 sm:bottom-0 -left-1 z-20 w-48 rotate-180  " initial={{ x: -500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="bottom right" className="absolute  sm:bottom-0 -right-0 z-20 w-48 rotate-180 bottom-0 " initial={{ x: 500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
    </main>
  );
};
export default Homepage;
