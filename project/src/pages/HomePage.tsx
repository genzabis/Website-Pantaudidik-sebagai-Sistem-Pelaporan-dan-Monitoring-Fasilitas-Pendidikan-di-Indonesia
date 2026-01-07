import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import StatisticsSection from '../components/home/StatisticsSection';
import IssueCategories from '../components/home/IssueCategories';
import HowItWorks from '../components/home/HowItWorks';
import SuccessStories from '../components/home/SuccessStories';
import CallToAction from '../components/home/CallToAction';
import Partners from '../components/home/Partners';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Pantaudidik.id - Platform Pelaporan Masalah Pendidikan Indonesia';
  }, []);

  return (
    <div>
      <HeroSection />
      <StatisticsSection />
      <IssueCategories />
      <HowItWorks />
      <SuccessStories />
      <CallToAction />
      <Partners />
    </div>
  );
};

export default HomePage;