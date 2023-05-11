"use client";

import { createContext, useState } from 'react';

type AgeContextType = {
  age: number;
  setAge: (age: number) => void;
};

export const AgeContext = createContext<AgeContextType>({
  age: 18,
  setAge: () => { }
});

function AgeProvider({ children }: any) {
  const [age, setAge] = useState(18);

  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {children}
    </AgeContext.Provider>
  )
}

export default AgeProvider;
