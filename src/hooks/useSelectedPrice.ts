import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useSelectedPrice = () => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const router = useRouter();

  const handlePriceSelect = (price: string) => {
    setSelectedPrice(price);
    router.push("/account/booking");
  };

  return { selectedPrice, handlePriceSelect };
};
