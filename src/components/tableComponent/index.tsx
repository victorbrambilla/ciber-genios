import React, { useContext, useEffect, useRef, useState } from 'react';
import { Table } from './styles';
import { Icon } from '@iconify/react';
import { GlobalContext } from '../../context/store';
import { ModalComponent } from '../modal';

export const TableComponent = () => {
  const global = useContext(GlobalContext);

  const handleDelete = (id: number) => {
    global.cars.splice(id, 1);
    global.setLoad(!global.load);
  };

  return (
    <Table responsive borderless>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Ano</th>
          <th>Velocidade máx Km/h</th>
          <th>Nota Economia</th>
          <th>Nota usuários</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {global.cars?.map((car, i) => (
          <tr className='car' key={i}>
            <td>{car.name}</td>
            <td>{car.year}</td>
            <td>{car.velocity} Km/h</td>
            <td>{car.gradeEconomy}/10</td>
            <td>{car.gradeUsers}/10</td>
            <td className='cellOptions'>
              <Icon
                onClick={() => {
                  handleDelete(i);
                }}
                icon='akar-icons:trash-can'
                fontSize={20}
              />

              <ModalComponent type='edit' id={i} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
