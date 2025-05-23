//! Types
import { CardProps } from "../types"

//! Styles
import styles from './styles.module.css';

export default function Card(props: CardProps) {
  const { children, variant } = props;
  return (
    <div className={`${styles.card} ${styles[`${variant}`]}`}>
      {children}
    </div>
  );
}
