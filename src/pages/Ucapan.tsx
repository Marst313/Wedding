import topLeft from '../assets/images/topLeft.png';
import topRight from '../assets/images/topRight.png';
import { motion } from 'framer-motion';
import bg from '../assets/images/6.jpeg';
import { useEffect, useState } from 'react';
import { customFetch } from '../utils/customFetch';
import { ApiResponse, IPostedData, TUcapan } from '../utils/type';
import { usePageContext } from '../utils/context/PageContext';

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

const Ucapan = () => {
  const [comments, setComments] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { name } = usePageContext();

  const [data, setData] = useState<TUcapan>({ nama: name || '', ucapan: '' });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (data.nama !== '' && data.ucapan !== '') {
      postData({
        records: [
          {
            fields: data,
          },
        ],
      });

      setData({ nama: '', ucapan: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const postData = async (data: IPostedData): Promise<void> => {
    try {
      setLoading(true);
      const resp = await customFetch.post('', data);

      if (resp.status === 200) {
        setLoading(false);
        return await getData();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getData = async (): Promise<void> => {
    try {
      setLoading(true);
      const resp = await customFetch.get<ApiResponse>('');

      if (resp.status === 200) {
        setComments(resp.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="relative z-30 flex flex-col items-center  text-center h-screen sm:h-full ">
        <motion.h2 className=" sm:mt-0 text-sm font-workSans capitalize leading-tight text-slate-800" initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
          Kamis <br /> 21 November 2024
        </motion.h2>

        <motion.div className="container-image__ucapan" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
          <img src={bg} alt="background" className=" rounded-full h-40 w-40 object-cover" />
        </motion.div>
        <h1 className="capitalize text-2xl font-miama">
          Undangan Untuk <span className="text-slate-900 font-bold"> {name}</span>
        </h1>

        <motion.form
          onSubmit={handleSubmit}
          className="sm:mt-2 flex flex-col gap-1 bg-primary/20 backdrop-blur-sm pb-1 rounded-xl shadow-[4px_4px_4px_rgba(0,0,0,0.3)] w-72 px-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="flex flex-col items-start">
            <label htmlFor="helper-text" className="block text-xs font-bold text-slate-600 mb-1">
              Nama
            </label>
            <input
              type="text"
              id="helper-text"
              name="nama" // Name harus string literal
              value={data.nama}
              onChange={handleChange}
              required
              aria-describedby="helper-text-explanation"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-1 px-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Masukkan nama anda"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="helper-text" className="mb-1 block text-xs font-bold text-slate-600">
              Ucapan
            </label>
            <textarea
              id="helper-text"
              name="ucapan" // Name harus string literal
              value={data.ucapan}
              onChange={handleChange}
              required
              className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 py-1 px-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Tuliskan ucapan anda"
              rows={2}
            />
          </div>

          <button type="submit" className="bg-sky-700 hover:bg-sky-800 w-full rounded-xl py-2 self-center text-white text-sm" disabled={loading}>
            {loading ? 'Loading...' : 'Kirim'}
          </button>
        </motion.form>

        <h1 className="mt-1 items-start font-semibold text-sm text-slate-700 sm:self-center">Ucapan Dan Salam:</h1>
        <motion.ol initial="hidden" animate="visible" className="h-32 items-center w-72 overflow-auto flex flex-col gap-2 rounded-xl  px-4 shadow-[4px_4px_4px_rgba(0,0,0,0.3)] backdrop-blur-sm  font-workSans font-normal py-1">
          {comments?.records.map((comment, i) => (
            <motion.li key={i} custom={i} variants={commentVariant} transition={{ duration: 2 }} className="w-full px-4  rounded-xl bg-white">
              <h1 className="text-sm font-semibold capitalize text-slate-900">{comment.fields.nama}</h1>
              <hr className="my-1 border-t border-gray-400" />
              <p className="text-sm text-slate-800  text-justify">{comment.fields.ucapan}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      <motion.img src={topRight} alt="top right" className="absolute top-0 -right-1 z-20 w-48" initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="top left" className="absolute top-0 -left-2 z-20 w-48" initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2 }} />

      <motion.img src={topRight} alt="bottom left" className="absolute sm:bottom-0 -left-1 z-20 w-48 rotate-180 -mt-72 " initial={{ x: -500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
      <motion.img src={topLeft} alt="bottom right" className="absolute  sm:bottom-0 -right-0 z-20 w-48 rotate-180 -mt-72 " initial={{ x: 500, rotate: 180 }} animate={{ x: 0 }} transition={{ duration: 2 }} />
    </>
  );
};
export default Ucapan;
