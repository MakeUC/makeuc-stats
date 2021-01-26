import React from 'react';
import { useStats } from '../Providers/StatsProvider';
import {
  TotalNum,
  RaceChart,
  EducationLevelChart,
  FemalesStat,
  UniversityStat,
  StatesStat
} from '../Stats/Stats';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Layout() {
  const { isLoading, error } = useStats();

  return <>
    <Navbar />

    <div className="container">
      {
        isLoading ? <h2 className="my-5">Loading...</h2> :
        error ? <h2 className="my-5">Error loading stats: {error.message}</h2> :
        <>
          <div className="jumbotron my-4 bg-grey">
            <TotalNum />
            <div className="row">
              <div className="col-md-6">
                <RaceChart />
              </div>
              <div className="col-md-6">
                <EducationLevelChart />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <FemalesStat />
            </div>
            <div className="col-md-4 mb-4">
              <UniversityStat />
            </div>
            <div className="col-md-4 mb-4">
              <StatesStat />
            </div>
          </div>
        </>
      }
    </div>

    <Footer />
  </>
}