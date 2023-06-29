import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import styles from './NavBar.module.scss';
import { AuthProviders } from '@/components/AuthProviders';
import { getCurrentUser } from '@/lib/session';
import { ProfileMenu } from '@/components/ProfilMenu/ProfileMenu';

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

export const Navbar = async () => {
  const session = await getCurrentUser();

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
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href='/create-project'>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};
