import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/store';
import { ICar } from '../../types/types';
import { Button } from '../button';
import { FormContainer, ImgPreview } from './styles';

interface props {
  handleClose: () => void;
  id?: number;
}

export const FormModal = ({ handleClose, id }: props) => {
  const global = useContext(GlobalContext);
  const [name, setName] = useState<string>();
  const [year, setYear] = useState<number>();
  const [velocity, setVelocity] = useState<number>();
  const [gradeEconomy, setGradeEconomy] = useState<number>();
  const [gradeUsers, setGradeUsers] = useState<number>();
  const [link, setLink] = useState<string>();
  const [helperText, setHelperText] = useState<string>();
  const [linkImg, setLinkImg] = useState<string>();

  useEffect(() => {
    if (id !== undefined) {
      const car = global.cars[id];
      setName(car.name);
      setYear(car.year);
      setVelocity(car.velocity);
      setGradeEconomy(car.gradeEconomy);
      setGradeUsers(car.gradeUsers);
      setLink(car.link);
      setLinkImg(car.linkImg);
    }
  }, [id, global.cars]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (
      name === undefined ||
      year === undefined ||
      velocity === undefined ||
      gradeEconomy === undefined ||
      gradeUsers === undefined ||
      link === undefined
    ) {
      setHelperText('Preencha todos os campos');
      return;
    } else {
      if (id !== undefined) {
        global.cars.splice(id, 1, {
          name,
          year: year,
          velocity: velocity,
          gradeEconomy: gradeEconomy,
          gradeUsers: gradeUsers,
          link,
          linkImg,
        });
        global.setLoad(!global.load);
        handleClose();
      } else {
        const data: ICar = {
          name,
          year: year,
          velocity: velocity,
          gradeEconomy: gradeEconomy,
          gradeUsers: gradeUsers,
          link,
          linkImg,
        };
        global.setCars([...global.cars, data]);
        handleClose();
      }
    }
  };

  const handleChange = (e: any) => {
    e.target.files[0] !== undefined
      ? setLinkImg(URL.createObjectURL(e.target.files[0]))
      : setLinkImg('');
  };

  return (
    <FormContainer>
      <div className='imgInput'>
        <ImgPreview imgUrl={linkImg}></ImgPreview>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          id='selecao-arquivo'
          type='file'
        />
        <label htmlFor='selecao-arquivo'>Selecionar imagem</label>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Ano
          <input
            value={year}
            onChange={(e) => {
              setYear(+e.target.value);
            }}
            type='number'
          />
        </label>
        <label>
          Velocidade Máxima Km/h
          <input
            type='number'
            value={velocity}
            onChange={(e) => {
              setVelocity(+e.target.value);
            }}
          />
        </label>
        <label>
          Nota Economia
          <input
            value={gradeEconomy}
            onChange={(e) => {
              setGradeEconomy(+e.target.value);
            }}
            max='10'
            type='number'
          />
        </label>
        <label>
          Nota Usuários
          <input
            value={gradeUsers}
            onChange={(e) => {
              setGradeUsers(+e.target.value);
            }}
            max='10'
            type='number'
          />
        </label>
        <label>
          Link produto
          <input
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            type='text'
          />
        </label>
        {helperText && <p className='helperText'>*{helperText}</p>}

        <div className='containerButtons'>
          <button onClick={handleClose} className='buttonCancel' type='button'>
            Cancelar
          </button>
          <Button
            darkBg={true}
            text={id !== undefined ? 'Salvar' : 'Adicionar Novo'}
          ></Button>
        </div>
      </form>
    </FormContainer>
  );
};
