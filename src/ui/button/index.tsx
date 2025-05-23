//! Types
import { ButtonProps } from '../types';

//! Styles
import styles from './styles.module.css';

export default function Button(props: ButtonProps) {
  //* Props
  const { children, onClick } = props;

  return (
    <>
      <button
        className={styles.button}
        onClick={onClick}
      >
        {children && <p className={styles.button__title}>{children}</p>}
      </button>
    </>
  );
}
