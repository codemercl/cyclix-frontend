import { useState } from 'react';

export const useSelectedPrice = (initialPrice: string | null = null) => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(initialPrice);

  const handlePriceSelect = (price: string) => {
    setSelectedPrice(price);
  };

  return { selectedPrice, handlePriceSelect };
};
