import React from 'react';
import { useStats } from '../Providers/StatsProvider';
import {
  TotalNum,
  RaceChart,
  EducationLevelChart,
  FemalesStat,
  UniversityStat,
  CountryStats
} from '../Stats/Stats';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Layout() {
  const { isLoading, error } = useStats();

  return <>
    <Navbar />

    <div className="nes-container is-dark main-container">
      {
        isLoading ? <h2 className="my-5">Loading...</h2> :
        error ? <h2 className="my-5">Error loading stats: {error.message}</h2> :
        <>
          <div className="py-5">
            <TotalNum />
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <RaceChart />
              </div>
              <div className="col-lg-6 col-md-12">
                <EducationLevelChart />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-4 col-md-12 mb-4">
              <FemalesStat />
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <UniversityStat />
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <CountryStats />
            </div>
          </div>
        </>
      }
    </div>

    <Footer />
  </>
}