import React from 'react';
import { CarImg, Cars } from './styles';
import { ICar } from '../../types/types';
import { Icon } from '@iconify/react';

export const CardCars = ({
  name,
  year,
  velocity,
  gradeEconomy,
  gradeUsers,
  link,
  linkImg,
}: ICar) => {
  console.log(linkImg);
  return (
    <div className='ContainerCar'>
      <CarImg linkImg={linkImg}></CarImg>
      <Cars>
        <h3>{name}</h3>
        <div className='cardBody'>
          <span>
            <Icon icon='bi:calendar-date' fontSize={24} />
            <p>{year}</p>
          </span>
          <span>
            <Icon icon='fluent:top-speed-20-regular' fontSize={24} />
            <p>{velocity} Km/h</p>
          </span>
          <span>
            <Icon icon='simple-line-icons:energy' fontSize={24} />
            <p>{gradeEconomy}/10</p>
          </span>
          <span>
            <Icon icon='fluent:people-20-regular' fontSize={24} />
            <p>{gradeUsers}/10</p>
          </span>
        </div>

        <a href={link}>Ver Carro</a>
      </Cars>
    </div>
  );
};
