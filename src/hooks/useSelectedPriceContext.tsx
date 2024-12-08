"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedPriceContextType {
  selectedPrice: string | null;
  setSelectedPrice: (price: string) => void;
}

const SelectedPriceContext = createContext<SelectedPriceContextType | undefined>(undefined);

export const SelectedPriceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  return (
    <SelectedPriceContext.Provider value={{ selectedPrice, setSelectedPrice }}>
      {children}
    </SelectedPriceContext.Provider>
  );
};

export const useSelectedPrice = (): SelectedPriceContextType => {
  const context = useContext(SelectedPriceContext);
  if (!context) {
    throw new Error('useSelectedPrice must be used within a SelectedPriceProvider');
  }
  return context;
};
