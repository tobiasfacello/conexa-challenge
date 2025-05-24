//! Types
import { StaticImageData } from 'next/image';

//* Character Card Components
export type CharacterCardProps = {
	readonly image: StaticImageData | string;
	readonly name: string;
	readonly status: string;
	readonly specie: string;
};
