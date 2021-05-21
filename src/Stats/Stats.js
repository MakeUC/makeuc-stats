import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useDownloadCanvas } from '../Providers/DownloadProvider';
import { useStats } from '../Providers/StatsProvider';
import { buildRaceChart, buildEducationLevelChart } from './charts';

export function TotalNum() {
  const { stats: { count } } = useStats();
  return <h2 className="text-left">
    Total registrants: <CountUp end={count} />
  </h2>;
}
export function RaceChart() {
  const { stats: { ethnicities } } = useStats();
  const { download } = useDownloadCanvas();
  const id = `race-chart`;

  useEffect(() => {
    const ctx = document.getElementById(id);
    buildRaceChart(ctx, ethnicities);
  }, [ id, ethnicities ]);

  return <div className="nes-container with-title is-dark is-centered stats-container">
    <p class="title">Ethnicities</p>
    <canvas id={id} width="200" height="200" />
    <button
      type="button"
      className="nes-btn btn-primary-new mt-2"
      onClick={() => download(id, `RevolutionUC 2020 Ethnicity Chart`)}
    >Download</button>
  </div>;
}
export function EducationLevelChart() {
  const { stats: { educationLevels } } = useStats();
  const { download } = useDownloadCanvas();
  const id = `edu-level-chart`;

  useEffect(() => {
    const ctx = document.getElementById(id);
    buildEducationLevelChart(ctx, educationLevels);
  }, [ id, educationLevels ]);

  return <div className="nes-container with-title is-dark is-centered stats-container">
    <p class="title">Education Levels</p>
    <canvas id={id} width="200" height="200" />
    <button
      type="button"
      className="nes-btn btn-primary-new mt-2"
      onClick={() => download(id, `RevolutionUC 2020 Education Level Chart`)}
    >Download</button>
  </div>;
}
export function FemalesStat() {
  const { stats: { femalesPercent } } = useStats();

  return <div className="nes-container is-dark">
    <h4 className="card-title">
      <CountUp delay={2} decimals={2} end={femalesPercent} />% <small>female attendance</small>
    </h4>
  </div>;
}
export function UniversityStat() {
  const { stats: { universityCount } } = useStats();

  return <div className="nes-container is-dark">
    <h4 className="card-title">
      <CountUp delay={2} end={universityCount} /> <small>schools represented</small>
    </h4>
  </div>;
}
export function CountryStats() {
  const { stats: { countryCount } } = useStats();

  return <div className="nes-container is-dark">
    <h4 className="card-title">
      <CountUp delay={2} end={countryCount} /> <small>countries represented</small>
    </h4>
  </div>;
}