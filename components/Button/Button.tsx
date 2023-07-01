import React, { FC, MouseEventHandler } from 'react';
import Image from 'next/image';

interface ButtonProps {
  title: string;
  type: 'button' | 'submit';
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  bgColor?: string;
  textColor?: string;
}

export const Button: FC<ButtonProps> = ({
  title,
  bgColor,
  textColor,
  handleClick,
  isSubmitting,
  leftIcon,
  rightIcon,
  type,
}) => {
  return (
    <>
      <button
        type={type || 'button'}
        disabled={isSubmitting || false}
        className={`flexCenter gap-3 px-4 py-3 
        ${textColor ? textColor : 'text-white'} 
        ${
          isSubmitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary-purple'
        } rounded-xl text-sm font-medium max-md:w-full`}
        onClick={handleClick}
      >
        {leftIcon ? <Image src={leftIcon} width={14} height={14} alt='left' /> : null}
        {title}
        {rightIcon ? <Image src={rightIcon} width={14} height={14} alt='right' /> : null}
      </button>
    </>
  );
};
