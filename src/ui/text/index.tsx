//! Types
import { TextProps } from '../types';

//! Styles
import styles from "./styles.module.css"

export default function Text(props: TextProps) {
  const { variant, children } = props;

  const isTitle = variant === 'title';
  const isSubtitle = variant === 'subtitle';
  const isParagraph = variant === 'paragraph';
  const isDetails = variant === 'details';

  return (
    <>
      {isTitle && <h2 className={styles.title}>{children}</h2>}
      {isSubtitle && <h3 className={styles.subtitle}>{children}</h3>}
      {isParagraph && <p className={styles.paragraph}>{children}</p>}
      {isDetails && <p className={styles.details}>{children}</p>}
    </>
  );
}
