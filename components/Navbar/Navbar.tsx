import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import styles from './NavBar.module.scss';
import { AuthProviders } from '@/components/AuthProviders';

const NavLink = () => {
  return (
    <>
      {NavLinks.map((link) => {
        return (
          <Link href={link.href} key={link.key}>
            {link.text}
          </Link>
        );
      })}
    </>
  );
};

export const Navbar = () => {
  const session = {};

  return (
    <nav className='flexBetween navbar'>
      <div className={`${styles.logo} flexStart`}>
        <Link href='/'>
          <Image alt='logo' src='/logo.svg' width={115} height={43} />
        </Link>
        <ul className={`${styles.logoLinks} text-small`}>
          <NavLink />
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session ? (
          <>
            UserPhoto
            <Link href='/create-project'>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};
