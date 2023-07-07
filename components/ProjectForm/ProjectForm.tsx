'use client';

import { SessionInterface } from '@/common.type';
import { FC, FormEvent } from 'react';
import styles from './ProjectForm.module.scss';

import { FormField } from '@/components/FormField/FormField';
import { CustomMenu } from '@/components/CustomMenu/CustomMenu';
import { categoryFilters } from '@/constants';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { createNewProject, fetchToken } from '@/lib/actions';
import { useRouter } from 'next/navigation';

interface ProjectFormProps {
  type: 'create' | 'edit';
  session: SessionInterface;
}

export const ProjectForm: FC<ProjectFormProps> = ({ type, session }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    liveSiteUrl: '',
    githubUrl: '',
    category: '',
  });
  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({ ...prevState, [fieldName]: value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    const { token } = await fetchToken();

    try {
      if (type === 'create') {
        await createNewProject(form, session?.user?.id, token);

        router.push('/');
      }
    } catch (error) {
      alert(`Failed to ${type === 'create' ? 'create' : 'edit'} a project. Try again!`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChaneImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes('image')) {
      return alert('Return an image file');
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange('image', result);
    };
  };

  return (
    <form onSubmit={handleSubmit} className='flexStart form'>
      <div className='flexStart form_image-container'>
        <label htmlFor='poster' className='flexCenter form_image-label'>
          {!form.image ? 'Chose a thumbnail for you project' : null}
        </label>
        <input
          type='file'
          id='image'
          accept='image/*'
          required={type === 'create'}
          className='form_image-input'
          onChange={(e) => handleChaneImg(e)}
        />
        {form.image && <Image src={form?.image} alt='Project preview' className={styles.preview} fill />}
      </div>

      <FormField
        state={form.title}
        title='title'
        placeholder='flexibble'
        setState={(value) => handleStateChange('title', value)}
      />
      <FormField
        state={form.description}
        title='Description'
        placeholder='Showcase and discover remarkable projects.'
        setState={(value) => handleStateChange('description', value)}
      />
      <FormField
        type='url'
        state={form.liveSiteUrl}
        title='Website URL'
        placeholder='https://linktoyoursite.com'
        setState={(value) => handleStateChange('liveSiteUrl', value)}
      />
      <FormField
        type='url'
        state={form.githubUrl}
        title='GitHub URL'
        placeholder='https://linktoyoursite.com'
        setState={(value) => handleStateChange('githubUrl', value)}
      />

      <CustomMenu
        title='Category'
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange('category', value)}
      />

      <div className='flexStart w-full'>
        <Button
          title={
            isSubmitting ? `${type === 'create' ? 'Creating' : 'Editing'}` : `${type === 'create' ? 'Create' : 'Edit'} `
          }
          type='submit'
          leftIcon={isSubmitting ? '' : '/plus.svg'}
          isSubmitting={isSubmitting}
        />
      </div>
    </form>
  );
};
