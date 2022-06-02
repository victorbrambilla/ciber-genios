import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import { Header } from '../../components/header';
import Container from './styles';

import { TableComponent } from '../../components/tableComponent';
import { ModalComponent } from '../../components/modal';

const Table: NextPage = () => {
  const loaderRef = useRef(null);

  const onScroll = () => {
    console.log('');
    if (loaderRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = loaderRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        //makingsettimeout
        console.log('cheogu');
      }
    }
  };

  useEffect(() => {
    onScroll();
  });
  return (
    <>
      <Header />
      <Container ref={loaderRef}>
        <div className='header'>
          <h2>Lista</h2>
          <ModalComponent type='Create' />
        </div>
        <TableComponent />
      </Container>
    </>
  );
};

export default Table;
