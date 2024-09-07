import React, { createContext, useContext, useState } from 'react';

type TContainerProps = {
  children: React.ReactNode;
};

type TPageContext = {
  pages: string;
  setPages: React.Dispatch<React.SetStateAction<string>>;
};

const TPageState: TPageContext = {
  pages: '',
  setPages: () => '',
};

export const PageContext = createContext<TPageContext>(TPageState);

export const PageProvider = (props: TContainerProps) => {
  const [pages, setPages] = useState<string>('opening');

  return <PageContext.Provider value={{ pages, setPages }}>{props.children}</PageContext.Provider>;
};

export const usePageContext = () => useContext(PageContext);
