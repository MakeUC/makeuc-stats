import React from 'react';
import Chart from 'chart.js';
import { DownloadProvider } from './Providers/DownloadProvider';
import { StatsProvider } from './Providers/StatsProvider';
import { Layout } from './Layout/Layout';

import './App.css';

function App() {
  Chart.defaults.global.defaultFontFamily = "'Press Start 2P'";
  Chart.defaults.global.defaultFontSize   = 8;

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
