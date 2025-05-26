//! Types
import { ButtonProps } from '../types';

//! Components
import Text from '@/ui/text';

//! Styles
import styles from './styles.module.css';

export default function Button(props: ButtonProps) {
  //* Props
  const { children, selected, onClick } = props;

  return (
    <>
      <button
        className={`${styles.button} ${selected ? styles.selected : null}`}
        onClick={onClick}
      >
        {children && <Text variant='details'>{children}</Text>}
      </button>
    </>
  );
}
