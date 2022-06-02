import type { NextPage } from 'next';
import { Banner } from '../components/banner';
import { FooterHome } from '../components/footerHome';
import { SectionCars } from '../components/sectionCars';

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <SectionCars />
      <FooterHome />
    </>
  );
};

export default Home;
