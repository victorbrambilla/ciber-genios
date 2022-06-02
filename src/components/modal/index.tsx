import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Button } from '../button/styles';
import { FormModal } from './FormModal';

import { Modal } from './styles';

interface Props {
  type: string;
  id?: number;
}

export const ModalComponent = ({ type, id }: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {type === 'edit' ? (
        <Icon onClick={handleShow} icon='clarity:pencil-line' fontSize={20} />
      ) : (
        <Button darkBg={false} onClick={handleShow}>
          <Icon
            icon='akar-icons:plus'
            className='ModalIcon'
            fontSize={20}
            color={'#1d2527'}
          />
          Adicionar Novo
        </Button>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName='modalDialogCustom'
      >
        <Modal.Header>
          <Modal.Title>
            {type === 'edit' ? 'Editar' : 'Adicionar Novo'}
          </Modal.Title>
          <Icon
            style={{
              cursor: 'pointer',
            }}
            onClick={handleClose}
            fontSize={21}
            icon='akar-icons:circle-x'
          />
        </Modal.Header>
        <Modal.Body>
          <FormModal id={id} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
