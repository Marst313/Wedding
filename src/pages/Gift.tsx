import { motion } from 'framer-motion';
import topLeft from '../assets/images/topLeft.png';
import topRight from '../assets/images/topRight.png';
import { madeList } from '../utils/constant';

const commentVariant = {
  hidden: { opacity: 0, y: -100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 50,
    },
  }),
};

const Gift = () => {
  return (
    <>
      <div className="h-screen z-20 relative flex flex-col items-center  gap-5 px-4 text-slate-800 pt-32">
        <motion.h1 initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }} className="font-miama text-2xl text-slate-900 font-semibold">
          ✤ Penutup ✤
        </motion.h1>

        <motion.h1 initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }} className="text-center max-w-sm leading-relaxed font-workSans text-xl mt-5 font-semibold">
          Terima kasih
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="text-center font-workSans text-sm leading-relaxed">
          Dengan penuh rasa syukur, kami mengucapkan terima kasih atas kehadiran dan doa restu Bapak/Ibu/Saudara/i dalam momen bahagia kami. Kehadiran Anda sangat berarti bagi kami. Semoga cinta dan kebahagiaan senantiasa menyertai kita
          semua.
        </motion.p>

        <motion.div className="flex flex-col items-center relative">
          <h1 className="mt-5 font-workSans text-xl  text-center text-slate-800 mb-2">Made with love by Marst</h1>

          <motion.div className="flex gap-2" initial="hidden" animate="visible">
            {madeList.map((list, i) => {
              return (
                <motion.a key={list.no} custom={i} variants={commentVariant} className={`${list.color} text-white px-2 py-2 rounded-full`} href={list.link} target="_blank">
                  <list.icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.img src={topRight} alt="top right" className="absolute top-0 -right-1 z-20 w-48" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="top left" className="absolute top-0 -left-2 z-20 w-48" initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />

      <motion.img src={topRight} alt="bottom left" className="absolute sm:bottom-0 -left-1  w-48 rotate-180 -mt-72 " initial={{ x: -500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="bottom right" className="absolute sm:bottom-0 -right-0  w-48 rotate-180 -mt-72 " initial={{ x: 500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
    </>
  );
};
export default Gift;
