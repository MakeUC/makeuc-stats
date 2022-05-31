import React, { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';
import axios, { AxiosError } from 'axios';

const defaultStats = { count: 0, ethnicities: {}, educationLevels: {}, femalesPercent: 0, universityCount: 0, countryCount: 0 };

type StatsProviderContext = {
  stats: typeof defaultStats;
  isLoading: boolean;
  error?: AxiosError;
};

const context = createContext<StatsProviderContext>({ stats: defaultStats, isLoading: true, error: undefined });

export type StatsProviderProps = {
  children: ReactNode;
}

export const StatsProvider: FC<StatsProviderProps> = ({ children }) => {
  const [ stats, setStats ] = useState(defaultStats);
  const [ isLoading, setLoading ] = useState(true);
  const [ error, setError ] = useState<AxiosError>();

  useEffect(() => {
    (async function() {
      const env = process.env.NODE_ENV;
      console.log("🚀 ~ file: StatsProvider.js ~ line 16 ~ env", env)

      const serverUrl = (env === `development`) ? `http://localhost:2000` : ``;

      try {
        const res = await axios({
          url: `${serverUrl}/stats`,
          method: `GET`
        });

        setStats(res.data.stats);
      } catch(err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  return <context.Provider value={{ stats, isLoading, error }}>{children}</context.Provider>
};

export const useStats = () => useContext(context);