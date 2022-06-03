import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { Header } from '../../components/header';
import Container from './styles';

import { TableComponent } from '../../components/tableComponent';
import { ModalComponent } from '../../components/modal';

const Table: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
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
