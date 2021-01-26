import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const defaultStats = { count: 0, ethnicities: {}, educationLevels: {}, femalesPercent: 0, universityCount: 0 };

const context = createContext({ stats: defaultStats, isLoading: true, error: null });

export function StatsProvider({ children }) {
  const [ stats, setStats ] = useState(defaultStats);
  const [ isLoading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    (async function() {
      const env = process.env.NODE_ENV;

      const serverUrl = (env === `development`) ? `http://localhost:3000` : ``;

      try {
        const res = await axios({
          url: `${serverUrl}/stats`,
          method: `GET`
        });

        setStats(res.data.stats);
      } catch(err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  return <context.Provider value={{ stats, isLoading, error }}>{children}</context.Provider>
};

export const useStats = () => useContext(context);