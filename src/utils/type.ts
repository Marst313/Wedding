import { IconType } from 'react-icons';

export interface ICarousel {
  no: number;
  url: string;
  alt: string;
}

export interface INavbarList {
  no: number;
  name: string;
  icon: IconType;
}

export interface IMade {
  no: number;
  link: string;
  icon: IconType;
  color: string;
}

export type TUcapan = {
  nama: string;
  ucapan: string;
};

export interface ISingleResponse {
  id: string;
  createdTime: Date;
  fields: TUcapan;
}

export interface ApiResponse {
  records: ISingleResponse[];
}

export interface IPostedData {
  records: [
    {
      fields: TUcapan;
    }
  ];
}
