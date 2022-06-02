import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Nav, Offcanvas } from 'react-bootstrap';
import menu from '../../../public/icons/menu.svg';

import { Logo, MenuButton, MenuContainer, NavContainer } from './styles';

export const HambugerMenu = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <MenuButton onClick={handleShow}>
        <Image src={menu} width={40} height={40} alt='menu' />
      </MenuButton>
      <MenuContainer show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Logo />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavContainer>
            <ul>
              <li className={router.pathname === '/' ? 'active' : ''}>
                <Link href='/'> Home</Link>
              </li>
              <li className={router.pathname === '/about' ? 'active' : ''}>
                <Link href='/about'> Sobre</Link>
              </li>
              <li className={router.pathname === '/table' ? 'active' : ''}>
                <Link href='/table'> Tabela</Link>
              </li>
              <li className={router.pathname === '/contact' ? 'active' : ''}>
                <Link href='/contact'> Fale Conosco</Link>
              </li>
            </ul>
          </NavContainer>
        </Offcanvas.Body>
      </MenuContainer>
    </>
  );
};
