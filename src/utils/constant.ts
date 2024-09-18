import { image1, image2, image3, image4 } from '../assets/images';
import { ICarousel, IMade, INavbarList } from './type';
import { FcHome, FcAddressBook, FcCollect, FcComments, FcMoneyTransfer } from 'react-icons/fc';

import { RiFacebookBoxFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
export const dataCarousel: ICarousel[] = [
  {
    no: 1,
    url: image1,
    alt: 'gambar satu',
  },
  {
    no: 2,
    url: image2,
    alt: 'gambar dua',
  },
  {
    no: 3,
    url: image3,
    alt: 'gambar tiga',
  },
  {
    no: 4,
    url: image4,
    alt: 'gambar empat',
  },
];

export const listNavbar: INavbarList[] = [
  {
    no: 1,
    name: 'opening',
    icon: FcHome,
  },
  {
    no: 2,
    name: 'quotes',
    icon: FcAddressBook,
  },
  {
    no: 3,
    name: 'ucapan',
    icon: FcComments,
  },
  {
    no: 4,
    name: 'lokasi',
    icon: FcCollect,
  },
  {
    no: 5,
    name: 'penutup',
    icon: FcMoneyTransfer,
  },
];

export const madeList: IMade[] = [
  {
    no: 1,
    link: 'https://www.instagram.com/inyoman_dharma/',
    icon: RiInstagramFill,
    color: 'bg-pink-400',
  },
  {
    no: 2,
    link: 'https://www.facebook.com/dharmarst/',
    icon: RiFacebookBoxFill,
    color: 'bg-blue-400',
  },
  {
    no: 3,
    link: 'https://wa.me/+6282223050011',
    icon: RiWhatsappFill,
    color: 'bg-green-400',
  },
];
