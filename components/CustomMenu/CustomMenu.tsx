import { Menu } from '@headlessui/react';
import Image from 'next/image';
import { FC } from 'react';
import styles from './CustomMenu.module.scss';

interface Props {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void;
}
export const CustomMenu: FC<Props> = ({ title, filters, setState, state, value }) => {
  return (
    <div className={`flexStart ${styles.customMenu}`}>
      <label htmlFor={title} className={styles.label}>
        {title}
      </label>
      <Menu as='div' className='self-start relative'>
        <div>
          <Menu.Button className='flexCenter custom_menu-btn'>
            {state || 'Select a category'}
            <Image src='/arrow-down.svg' alt='arrow-down' width={10} height={5} />
          </Menu.Button>
        </div>
        <Menu.Items className='flexStart custom_menu-items'>
          {filters.map((tag) => (
            <Menu.Item key='tag'>
              <button
                type='button'
                value={tag}
                className='custom_menu-item'
                onClick={(e) => setState(e.currentTarget.value)}
              >
                {tag}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};
