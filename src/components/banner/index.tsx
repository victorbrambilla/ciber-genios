import React, { FC } from 'react';
import { Header } from '../header';
import { NextPage } from 'next';
import { BannerContainer } from './styles';

export const Banner: NextPage = () => {
  return (
    <BannerContainer>
      <Header />
      <div className='rounded'>
        <div className='title'>
          <h1>MUSTANG</h1>
        </div>
      </div>
    </BannerContainer>
  );
};
