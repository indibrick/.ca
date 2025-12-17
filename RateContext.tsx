import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { MortgageRate } from './types';
import { MORTGAGE_RATES as INITIAL_RATES } from './constants';

interface RateContextType {
  rates: MortgageRate[];
  addRate: (rate: Omit<MortgageRate, 'id'>) => void;
  updateRate: (id: string, updatedRate: Partial<MortgageRate>) => void;
  deleteRate: (id: string) => void;
}

const RateContext = createContext<RateContextType | undefined>(undefined);

export const RateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [rates, setRates] = useState<MortgageRate[]>(() => {
    try {
      const saved = localStorage.getItem('mortgage_rates');
      return saved ? JSON.parse(saved) : INITIAL_RATES;
    } catch (e) {
      return INITIAL_RATES;
    }
  });

  useEffect(() => {
    localStorage.setItem('mortgage_rates', JSON.stringify(rates));
  }, [rates]);

  const addRate = (rate: Omit<MortgageRate, 'id'>) => {
    const newRate = { ...rate, id: Date.now().toString() };
    setRates([...rates, newRate]);
  };

  const updateRate = (id: string, updatedRate: Partial<MortgageRate>) => {
    setRates(rates.map(r => r.id === id ? { ...r, ...updatedRate } : r));
  };

  const deleteRate = (id: string) => {
    setRates(rates.filter(r => r.id !== id));
  };

  return (
    <RateContext.Provider value={{ rates, addRate, updateRate, deleteRate }}>
      {children}
    </RateContext.Provider>
  );
};

export const useRates = () => {
  const context = useContext(RateContext);
  if (!context) {
    throw new Error('useRates must be used within a RateProvider');
  }
  return context;
};