import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import profileIcon from '../../../public/icons/profile.svg';
import { HambugerMenu } from '../hamburgerMenu';
import { HeaderContainer, Logo, NavContainer } from './styles';

export const Header: NextPage = () => {
  const router = useRouter();
  return (
    <HeaderContainer path={router.pathname}>
      <HambugerMenu />
      <div className='headerWeb'>
        <Logo />

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

        <div className='containerProfile'>
          <Link href='/'>Entrar</Link>
          <Image src={profileIcon} alt='profileIcon' />
        </div>
      </div>
    </HeaderContainer>
  );
};
