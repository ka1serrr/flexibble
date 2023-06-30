'use client';

import { SessionInterface } from '@/common.type';
import { FC } from 'react';

interface ProjectFormProps {
  type: 'create' | 'edit',
  session: SessionInterface
}

export const ProjectForm: FC<ProjectFormProps> = ({type, session}) => {

  const handleSubmit = (e: React.FormEvent) => {}

  const image = null
  return (
    <form onSubmit={handleSubmit} className='flexStart form'>
      <div className='flexStart form_image-container'>
        <label htmlFor='poster' className='flexCenter form_image-label'>
          {!image ? 'Chose a thumbnail for you project' : null}
        </label>
      </div>
    </form>
  );
};
