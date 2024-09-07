import topLeft from '../assets/images/topLeft.png';
import topRight from '../assets/images/topRight.png';
import { motion } from 'framer-motion';

const Quotes = () => {
  return (
    <>
      <motion.div className="description-quotes flex items-center  flex-col text-center  leading-loose  z-30 relative text-black font-workSans h-screen pt-20" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2 }}>
        <h1 className="text-xl px-10 ">✤ Ar Rum : 21 ✤</h1>

        <p className="text-xl my-10 text-slate-800 font-light text-center px-4 leading-relaxed" dir="rtl">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </p>

        <p className="px-6 text-sm">
          " Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. "
        </p>
      </motion.div>

      <motion.img src={topRight} alt="top right" className="absolute top-0 -right-1 z-20 w-48" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="top left" className="absolute top-0 -left-2 z-20 w-48" initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />

      <motion.img src={topRight} alt="bottom left" className="absolute sm:bottom-0 -left-1 z-20 w-48 rotate-180 -mt-72 " initial={{ x: -500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="bottom right" className="absolute  sm:bottom-0 -right-0 z-20 w-48 rotate-180 -mt-72 " initial={{ x: 500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
    </>
  );
};
export default Quotes;
