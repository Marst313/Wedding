import React, { createContext, useContext, useState } from 'react';

type TContainerProps = {
  children: React.ReactNode;
};

type TPageContext = {
  pages: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPages: React.Dispatch<React.SetStateAction<string>>;
};

const TPageState: TPageContext = {
  pages: '',
  name: '',
  setPages: () => '',
  setName: () => '',
};

export const PageContext = createContext<TPageContext>(TPageState);

export const PageProvider = (props: TContainerProps) => {
  const [pages, setPages] = useState<string>('opening');
  const [name, setName] = useState<string>('user');

  return <PageContext.Provider value={{ pages, setPages, name, setName }}>{props.children}</PageContext.Provider>;
};

export const usePageContext = () => useContext(PageContext);
