//! Types
import { AvatarProps } from '../types';

//! Components
import Image from 'next/image';

//! Styles
import styles from './styles.module.css'

export default function Avatar(props: AvatarProps) {
  const { src, title } = props;

  return (
    <div className={styles.avatar}>
      <Image src={src} alt={`Episode Character - ${title}`} title={title} width={30} height={30} />
    </div>
  )
}