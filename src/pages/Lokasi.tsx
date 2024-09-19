import topLeft from '../assets/images/topLeft.png';
import topRight from '../assets/images/topRight.png';
import bgFlower from '../assets/images/singleFlower.png';
import { SlLocationPin } from 'react-icons/sl';
import { motion } from 'framer-motion';

const Lokasi = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-start gap-5 flex-col z-20 relative pt-5">
        <motion.h1 className="font-workSans text-xl font-semibold" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
          Maps
        </motion.h1>

        <motion.iframe
          initial={{ opacity: 0, scale: 0, rotate: -50 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9765971676693!2d110.90272001113294!3d-7.792302292195184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a2fbbfa5b9b13%3A0xb498ece7fa04066d!2sGraha%20Sasono%20Mulyo!5e0!3m2!1sen!2sid!4v1725431897830!5m2!1sen!2sid"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-[22rem] p-2 border-2 rounded-xl mx-auto shadow-[0px_4px_4px_rgba(0,0,0,0.1)] h-96"
        ></motion.iframe>

        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          className="relative z-50  flex  gap-2 justify-center items-center border-2 border-white  bg-sky-700 text-white px-10 py-2 rounded-full hover:bg-sky-600"
          href="https://maps.app.goo.gl/2SLLH9ZH1VNyJeYMA"
          target="_blank"
        >
          <SlLocationPin />
          Lokasi
        </motion.a>
      </div>

      <motion.img src={bgFlower} alt="flower right" className="absolute top-40 -right-5 z-20 " initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={bgFlower} alt="flower left" className="absolute top-40 -left-5 z-20 " initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />

      <motion.img src={topRight} alt="top right" className="absolute top-0 -right-1 z-20 w-48" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="top left" className="absolute top-0 -left-2 z-20 w-48" initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />

      <motion.img src={topRight} alt="bottom left" className="absolute sm:bottom-0 -left-1 z-10 w-48 rotate-180 -mt-72 " initial={{ x: -500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="bottom right" className="absolute  sm:bottom-0 -right-0 z-10 w-48 rotate-180 -mt-72 " initial={{ x: 500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
    </>
  );
};
export default Lokasi;
