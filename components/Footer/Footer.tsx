import React from 'react';
import Image from 'next/image';
import { footerLinks, footerText } from '@/constants';
import { FC } from 'preact/compat';
import Link from 'next/link';

import styles from './Footer.module.scss';

interface ColumnProps {
  title: string;
  links: Array<string>;
}
const FooterColumn: FC<ColumnProps> = ({ title, links }) => {
  return (
    <div className='footer_column'>
      <h4 className='font-semibold'>{title}</h4>
      <ul className='flex flex-col gap-2 font-normal'>
        {links?.map((link) => (
          <Link href='/' key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className={styles.footerWrapper}>
        <div className={styles.logo}>
          <Image src='/logo-purple.svg' width={115} height={43} alt='flexibble-logo' />
          <p className={styles.logoText}>{footerText}</p>
        </div>

        <div className={styles.columnsWrapper}>
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

          <div className={styles.columnWrapper}>
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
          </div>

          <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

          <div className={styles.columnWrapper}>
            <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
            <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
          </div>

          <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
        </div>
      </div>

      <div className='flexBetween footer_copyright'>
        <p>@ 2023, Flexibble. All rights reserved.</p>
        <p className='text-gray'>
          <span className='text-black font-semibold'>10,214</span> projects submitted
        </p>
      </div>
    </footer>
  );
};
