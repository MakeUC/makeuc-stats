import React from 'react';
import { useStats } from '../Providers/StatsProvider';

import '../App.css';

import {
  TotalNum,
  RaceChart,
  EducationLevelChart,
  FemalesStat,
  UniversityStat,
  CountryStats
} from '../Stats/Stats';
import SponsorSection from '../Stats/Sponsors';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Container, WhiteContainer } from '../Components/LayoutComponents';
import { MainContainer, NumberedStats, TwoColumn } from './StyledComponents';



export function Layout() {
  const { isLoading, error } = useStats();

  return <>
    <Navbar />

    <MainContainer>
      {
        isLoading ? <h2 className="my-5">Loading...</h2> :
          error ? <h2 className="my-5">Error loading stats: {error.message}</h2> :
            <>
              <Container className="mt-3 text-center">
                <TotalNum />
              </Container>

              <Container className="mt-3">
                <NumberedStats>
                  <FemalesStat />
                  <UniversityStat />
                  <CountryStats />
                </NumberedStats>
              </Container>

              <TwoColumn className="mt-3">
                <Container>
                  <RaceChart />
                </Container>

                <Container>
                  <EducationLevelChart />
                </Container>
              </TwoColumn>

              <WhiteContainer className="mt-3">
                <SponsorSection />
              </WhiteContainer>
            </>
      }
    </MainContainer>

    <Footer />
  </>
}