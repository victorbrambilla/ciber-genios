import React, { ReactNode } from 'react';
import { useState } from 'react';
import { carsExample } from '../data/Cars';

import { ICar } from '../types/types';

type IStore = {
  cars: ICar[];
  setCars: (cars: ICar[]) => void;
  load: boolean;
  setLoad: (load: boolean) => void;
};
const authContextDefaultValues: IStore = {
  load: false,
  cars: [],
  setCars: () => {},
  setLoad: () => {},
};
export const GlobalContext = React.createContext<IStore>(
  authContextDefaultValues
);

export const GlobalStorage = ({ children }: { children: ReactNode }) => {
  const [cars, setCars] = useState<ICar[]>([...carsExample]);
  const [load, setLoad] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ cars, setCars, load, setLoad }}>
      {children}
    </GlobalContext.Provider>
  );
};
