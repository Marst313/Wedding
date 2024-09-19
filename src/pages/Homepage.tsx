import { Link, useParams } from 'react-router-dom';
import bgImage from '../assets/images/1.jpeg';
import { FcFolder } from 'react-icons/fc';
import { motion } from 'framer-motion';
import topLeft from '../assets/images/topLeft.png';
import topRight from '../assets/images/topRight.png';
import WomenAndMan from '../assets/images/5.jpeg';
import leavesDrop from '../assets/images/leavesdrop.png';

const Homepage = () => {
  const params = useParams();

  return (
    <main className="container-landing">
      <img src={bgImage} alt="bg images" className="w-full  blur-[10px] h-full object-top object-cover bg-top absolute z-0" />

      <motion.div className=" w-full  bg-primary/5  z-20 flex items-center py-5 justify-center flex-col h-screen " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <div className="flex flex-col items-center font-workSans  h-full ">
          <h3 className="main-title text-slate-800 font-bold text-center" style={{ transform: 'rotate(-1deg) translateY(-5px) translateX(0px)', transformOrigin: 'bottom center' }}>
            Nurul Sasmitaningrum
            <span>&</span>
            <span> Febry Romadhoni</span>
          </h3>
          <div className=" flex justify-center items-center">
            {/* Container for the curved text */}

            {/* The image */}
            <img src={WomenAndMan} alt="women and man" className="-z-10 border-4  mt-2 w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-full" />

            <img src={leavesDrop} alt="women and man" className="-z-20 absolute bottom-20 opacity-70  -left-40" />

            <img src={leavesDrop} alt="women and man" className="-z-20 absolute top-20 opacity-70 -right-44 " />
          </div>

          <h1 style={{ margin: 0, padding: 0 }} className="text-sm font-semibold ">
            Save The Date
          </h1>
          <h1 className="text-xl text-center  text-shadow leading-relaxed font-semibold text-shadow-white  font-greatVibes ">
            Kamis <br />
            21 November 2024
          </h1>

          <p className="text-base  text-slate-800">Yth :</p>
          <p className="text-base">
            Bpk/Ibu Saudara/i : <span className="font-semibold   text-xl text-slate-800 capitalize "> {params.name} </span>
          </p>

          <Link className="btn" to="/landingpage">
            <FcFolder className="text-3xl" />

            <span className="font-semibold">Buka Undangan</span>
          </Link>
        </div>
      </motion.div>

      <motion.img src={topRight} alt="top right" className="absolute top-0 -right-1 z-10 w-48" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="top left" className="absolute top-0 -left-2 z-10 w-48" initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />

      <motion.img src={topRight} alt="bottom left" className="absolute bottom-0 sm:bottom-0 -left-1 z-10 w-48 rotate-180  " initial={{ x: -500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="bottom right" className="absolute  sm:bottom-0 -right-0 z-10 w-48 rotate-180 bottom-0 " initial={{ x: 500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
    </main>
  );
};
export default Homepage;
