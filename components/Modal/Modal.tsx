'use client';

import styles from './Modal.module.scss'
import { useCallback, useRef, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement | null>(null)
  const wrapper = useRef<HTMLDivElement | null>(null)
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push('/')
  }, [router])

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onDismiss()
    }
  }

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (e.target === overlay.current && onDismiss) {
      onDismiss()
    }
  }, [overlay, onDismiss])

  return (
    <div ref={overlay} className='modal' onClick={handleClick} tabIndex='0' onKeyDown={(e) => onKeyPress(e)}>
      <button type='button' onClick={onDismiss} className={styles.dismissButton}>
        <Image src='/close.svg' alt='close' width={17} height={17}/>
      </button>
      <div className='modal_wrapper' ref={wrapper}>{children}</div>
    </div>
  );
};
