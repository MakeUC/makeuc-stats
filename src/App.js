import React from 'react';
import Chart from 'chart.js';
import { DownloadProvider } from './Providers/DownloadProvider.tsx';
import { StatsProvider } from './Providers/StatsProvider';
import { Layout } from './Layout/Layout';

import './App.css';

function App() {

  return (
    <div className="App">
      <StatsProvider>
        <DownloadProvider>
          <Layout />
        </DownloadProvider>
      </StatsProvider>
    </div>
  );
}

export default App;
