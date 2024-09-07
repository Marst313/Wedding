import { Gift, Lokasi, Opening, Quotes, Ucapan } from './';
import { usePageContext } from '../utils/context/PageContext';
import bg from '../assets/images/bg.png';

const Landingpage = () => {
  const { pages } = usePageContext();

  return (
    <section className="max-w-screen-sm mx-auto relative  bg-primary h-full  pt-5 sm:pt-10  pb-24 md:rounded-2xl overflow-hidden mb-20  sm:overflow-hidden">
      <img src={bg} alt="bg" className="absolute h-screen sm:h-full bg-cover sm:top-0 -mt-10" />

      {pages === 'opening' ? <Opening /> : pages === 'quotes' ? <Quotes /> : pages === 'ucapan' ? <Ucapan /> : pages === 'lokasi' ? <Lokasi /> : <Gift />}
    </section>
  );
};
export default Landingpage;
