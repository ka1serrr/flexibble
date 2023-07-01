import { FC } from 'preact/compat';
import styles from './FormField.module.scss';
interface FormFieldProps {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
}
export const FormField: FC<FormFieldProps> = ({ title, placeholder, isTextArea, state, setState, type }) => {
  return (
    <div className={`flexStart ${styles.formField}`}>
      <label className={styles.label}>{title}</label>

      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={state}
          required
          className='form_field-input'
          onChange={(e) => setState(e.target.value)}
        />
      ) : (
        <input
          type={type || 'text'}
          placeholder={placeholder}
          value={state}
          required
          className='form_field-input'
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
};
